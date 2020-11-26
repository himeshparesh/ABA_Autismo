import React from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Modal,
  Share,
} from 'react-native';
import { NavigationEvents } from "react-navigation";
import commonStyle from '../../styles/commonStyle';
import Header from '../../components/Header';
import ImagePicker from 'react-native-image-picker';
import Loader from '../../components/Loader';
import {api} from '../../apiManager/apiConsts';
import {connect} from 'react-redux';
import {getResponseFor} from '../../reducers/commonReducer';
import Res from '../../res';
import images from '../../res/images';
import styles from './styles';
import Video from 'react-native-video';

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.path = '';
    this.state = {
      profilePath: images.header.profile,
      loading: true,
      videos: [],
      currentVideo: '',
      isVideoVisible: false,
      isPause: true,
    };
  }

  componentDidMount() {
    this.fetchAllVidoes(true);  
  }
  // onWillFocus = () => {
  //   this.setState({loading:true})
  //   this.fetchAllVidoes(true);
  // };

  // onWillBlur = () => {
  //   this.setState({isPause: !this.state.isPause})
  // };


  fetchAllVidoes(refresh = false) {
    if (refresh) {
      this.page = 1;
    }
    var stateToUpdate = {
      loading: false,
      hasNextPage: false,
      loadMore: false,
      isRefreshing: false,
    };

    let url = api.videos;
    this.props.getResponseFor({
      url: url,
      onSuccess: response => {
        // stateToUpdate.hasNextPage = response.pages.nextPage;
        let listData = refresh ? [] : this.state.videos;
        let data = listData.concat(response.videos ?? []);
        stateToUpdate.videos = data;
        this.setState(stateToUpdate);
        // console.log('videos list :' + JSON.stringify(response.videos));
      },
      onFailure: error => {
        // console.log("error in catch :"+ JSON.stringify(error))
        this.setState({
          loading: false,
          hasNextPage: false,
          loadMore: false,
          isRefreshing: false,
        });
      },
      // showAlert: false,
    });
  }

  onPressRight = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('ImagePicker cancel or error: ', response);
        this.setState({
          profilePath: images.header.profile,
        });
      } else {
        console.log('ImagePicker success: ', response);
        this.setState({
          profilePath: response.uri,
        });
      }
    });
    
  };

  renderFooter = () => {
    if (this.state.loadMore) {
      return <ActivityIndicator color={Res.colors.black} />;
    } else {
      return null;
    }
  };

  renderRefreshComponent = () => {
    return (
      <RefreshControl
        refreshing={this.state.isRefreshing}
        onRefresh={() => {
          this.onRefresh();
        }}
      />
    );
  };

  onRefresh() {
    this.setState({isRefreshing: true}, () => {
      this.page = 1;
      this.fetchAllVidoes(true);
      this.path = '';
      this.isSelected = null;
    });
  }

  handleLoadMore = () => {
    if (!this.state.loadMore) {
      this.setState({loadMore: true});
      this.page = this.page + 1;
      this.fetchAllVidoes(false);
    }
  };

  onPressVideo = (item, index) => {
    this.path = item.video_url;
    this.isSelected = index;
    this.setState({
      isPause: !this.state.isPause,
    });
  };

  onPressShare = async item => {
    try {
      const result = await Share.share({
        message: item.video_url,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(' result :' + result.activityType);
        } else {
          console.log(' result shared :' + result.activityType);
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {}
  };

  // onLoadStart = () => {
  //  return <ActivityIndicator color={Res.colors.black} />
  // }

  renderAllVideos(item, index) {
    let playIcon =
      this.state.isPause && index == this.isSelected
        ? images.header.profile
        : images.video.play;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.onPressVideo(item, index)}
        onLongPress={() => this.onPressShare(item)}>
        <View style={styles.container}>
          {this.isSelected != index ? (
            <ImageBackground
              source={{uri: item.thumbnail_url}}
              style={{height: 200}}
              imageStyle={{borderRadius: 10}}>
              <View style={styles.viewImgPlay}>
                <Image source={playIcon} style={styles.imgPlay} />
              </View>
            </ImageBackground>
          ) : (
            <Video
              poster={item.thumbnail_url}
              posterResizeMode="cover"
              ref={videoPlayer => (this.videoPlayer = videoPlayer)}
              resizeMode={'cover'}
              onFullScreen={true}
              playWhenInactive={true}
              repeat={false}
              onLoadStart={this.onLoadStart}
              paused={this.state.isPause}
              // controls={true}
              source={{
                uri: this.path,
              }}
              style={{
                height: 200,
                borderRadius: 10,
              }}
              volume={10}></Video>
          )}
          <View style={styles.viewBottomContainer}>
            <View style={styles.viewFlexRow}>
              <Text style={styles.txtSubTitle}>New</Text>
              <Text style={styles.txtTime}>{`${index+1}`+"hr ago"}</Text>
            </View>
            <Text style={styles.txtTitle}>{item.title}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const {loading, videos} = this.state;
    return (
      <View style={commonStyle.container}>
        <Header
          title={'My Feed'}
          isTagVisible={true}
          filePath={this.state.profilePath}
          onPressRight={this.onPressRight}
        />
        <Loader loading={loading} />
        <FlatList
          data={videos}
          renderItem={({item, index}) => this.renderAllVideos(item, index)}
          style={{paddingVertical: 20}}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={this.renderRefreshComponent()}
          ListFooterComponent={this.renderFooter()}
          onEndReached={this.handleLoadMore}
        />
        {/* <NavigationEvents
         
          onWillBlur={payload => {
            this.onWillBlur();
          }}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {getResponseFor};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
