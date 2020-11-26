import React from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  Dimensions,
} from 'react-native';
import commonStyle from '../../styles/commonStyle';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import {api} from '../../apiManager/apiConsts';
import {connect} from 'react-redux';
import {getResponseFor} from '../../reducers/commonReducer';
import Res from '../../res';
import styles from './styles';

class stripColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      colorList: [],
      isRefreshing: false,
      colorNo: "0",
      selectedColor: null,
      selectedIndex: null,
      rootIndex: null,
    };
  }

  componentDidMount() {
    this.fetchAllColors();
  }

  fetchAllColors() {
    var stateToUpdate = {
      loading: false,
    };

    let url = api.strip;

    this.props.getResponseFor({
      url: url,
      onSuccess: response => {
        stateToUpdate.colorList = response;
        this.setState(stateToUpdate);
        console.log('color list :' + JSON.stringify(response));
      },
      onFailure: error => {
        // console.log("error in catch :"+ JSON.stringify(error))
        this.setState({
          loading: false,
        });
      },
    });
  }

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
    this.fetchAllColors(true);
  }

  onPressRight = () => {
    let finalVal = [];
    this.state.colorList.map(item => {
      item.values.map(subItem => {
        if (subItem.isChecked) {
          finalVal.push(` ${item.name}: ${subItem.value} `);
        }
      });
    });

    Alert.alert('Simform practical final output', JSON.stringify(finalVal), [
      {
        text: 'OK',
        onPress: () => {
          this.setState({
            loading: true,
            colorList: [],
            isRefreshing: false,
            colorNo: "0",
            selectedColor: null,
            selectedIndex: null,
          });
          this.fetchAllColors();
        },
      },
    ]);
  };

  renderLine = (rootItem, index) => {
    var selectedColor = '';

    this.state.colorList.map(item => {
      if (item.id == rootItem.id) {
        item.values.map(subItem => {
          if (subItem.isChecked) {
            console.log('sub item ' + subItem.color);
            selectedColor = subItem.color;
          }
        });
      }
    });

    var brTopWidth = index == 0 ? 3 : 0;
    var brBottomWidth = index == 5 ? 3 : 0;
    var borderTop = index == 0 ? 6 : 0;
    var borderBottom = index == 5 ? 6 : 0;
    return (
      <View
        style={[
          styles.viewLeftBarBox,
          {
            borderTopWidth: brTopWidth,
            borderBottomWidth: brBottomWidth,
            borderTopLeftRadius: borderTop,
            borderTopRightRadius: borderTop,
            borderBottomLeftRadius: borderBottom,
            borderBottomRightRadius: borderBottom,
          },
        ]}>
        <View
          style={[styles.viewSelectedColor, {backgroundColor: selectedColor}]}
        />
      </View>
    );
  };

  onPressSelectedColor = (subItem, rootItem, index, rootIndex) => {

    var temp = this.state.colorList;
    var colorNo = "";
    temp.map(item => {
      if (item.id == rootItem.id) {
        item.values.map(subItemObj => {
          if (subItemObj.color == subItem.color) {
            subItemObj.isChecked = true;
            colorNo = subItemObj.value
          } else {
            subItemObj.isChecked = false;
            colorNo = ""
          }
        });
      }
    });
    
    var stateToUpdate = [...temp, this.state.colorList];

    this.setState(stateToUpdate);

    // console.log("selected temp color :"+ JSON.stringify(temp))
  };

  onChangeColorCodeInput = input => {
    // this.setState({colorNo:input})
    // this.state.colorList.map(item => {
    //   // if (item.id == rootItem.id) {
    //     item.values.map(subItem => {
    //       if (subItem.value === input) {
    //         subItem.isChecked = true;
    //         console.log("found:"+ subItem.isChecked)
    //         this.setState(subItem);
    //       }
    //     });
    //   // }
    // });
  };

  renderAllColors(rootItem, rootIndex) {
    var selectedColorCode = "0";
    this.state.colorList.map(item => {
      if (item.id == rootItem.id) {
        item.values.map(subItem => {
          if (subItem.isChecked) {
            selectedColorCode = subItem.value;
          }
        });
      }
    });
    return (
      <View style={{}}>
        {this.renderLine(rootItem, rootIndex)}

        <View
          style={{
            flex: 1,
            paddingLeft: 50,
            marginVertical: 15,
            paddingRight: 5,
          }}>
          <View style={styles.viewTop}>
            <Text style={styles.txtHeading}>
              {rootItem.name}{' '}
              <Text style={styles.txtSubHeading}>({rootItem.unit})</Text>
            </Text>
            <TextInput
              keyboardType="numeric"
              maxLength={4}
              placeholderTextColor={Res.colors.primaryLightGrey}
              placeholder={'0'}
              onChangeText={text => this.onChangeColorCodeInput(text)}
              value={selectedColorCode}
              style={styles.styleInput}
            />
          </View>
          
            <FlatList
              data={rootItem.values}
              numColumns={5}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                let brColor = item.isChecked
                  ? styles.viewBorder
                  : styles.viewBgTrasparentColor;
                return (
                  <TouchableWithoutFeedback
                    key={index.toString()}
                    onPress={() =>
                      this.onPressSelectedColor(
                        item,
                        rootItem,
                        index,
                        rootIndex,
                      )
                    }>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '19.5%',
                      }}>
                      <View style={brColor}>
                        <View
                          style={[
                            {
                              backgroundColor: `${item.color}`,
                              minWidth: 50,
                              maxWidth: 60,
                            },
                            styles.viewBgColor,
                          ]}></View>
                      </View>
                      <Text style={styles.txtSubHeading}>{item.value}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              }}
            />
          
        </View>
      </View>
    );
  }

  render() {
    const {loading, colorList} = this.state;

    return (
      <View style={commonStyle.container}>
        <Header
          title={'Test Strip'}
          isTagVisible={false}
          filePath={this.state.profilePath}
          onPressRight={() => this.onPressRight()}
        />
        <Loader loading={loading} />
        <FlatList
          data={colorList}
          renderItem={({item, index}) => this.renderAllColors(item, index)}
          style={{marginVertical: 10}}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={this.renderRefreshComponent()}
          extraData={this.state}
        />
      </View>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {getResponseFor};

export default connect(mapStateToProps, mapDispatchToProps)(stripColorPicker);
