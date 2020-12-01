import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import Loader from "../../../../components/Loader";
import {U} from '../../../../Utility';
import {R} from '../../../../res';
import commonStyle from '../../../../styles/commonStyle';
import styles from './styles';
import ImageButton from '../../../../components/ImageButton';
import moment from 'moment';
import Orientation from 'react-native-orientation-locker';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      date: new Date(),
      note: '',
      loading: false,
      showDateTimePicker: false,
    };
  }

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  validate() {
    const {name,surname,note} = this.state;

    if (name.trim() === "" || name.length == 0) {
      U.utility.showMessage("Please enter user name");
      return false;
    }else if (surname.trim() === "" || surname.length == 0) {
      U.utility.showMessage("Please enter user surename");
      return false;
    }else if (note.trim() === "" || note.length == 0) {
      U.utility.showMessage("Please enter note");
      return false;
    }
    return true;
  }

  onCreateAccPressed = () => {
    // if(this.validate()){
      this.props.navigation.navigate('Home');
    // }
    
  };

  handleDateTimeChange = date => {
    this.setState({
      date: date,
      showDateTimePicker: false,
    });
  };

  hideDatePicker = () => {
    this.setState({showDateTimePicker: false});
  };

  render() {
    const {name, surname, note} = this.state;
    return (
      <View style={[commonStyle.container, {flexDirection: 'row'}]}>
        <View style={styles.leftContainer}>
          <View style={styles.titleContainer}>
            <ImageButton
              image={R.images.Icons.new_user}
              text={'New User'}
              iconStyle={commonStyle.imgIcon}
              textStyle={[styles.imgNewUser, {fontSize: 15,marginTop:3}]}
            />
          </View>
          <View style={styles.contendContainer}>
            {/* name */}
            <TextInput
              style={styles.textinput}
              label="Name"
              returnKeyType="next"
              value={name}
              placeholder={'Name'}
              onChangeText={text => this.setState({text})}
            />

            {/* surname */}
            <TextInput
              style={styles.textinput}
              label="Surname"
              returnKeyType="next"
              value={surname}
              placeholder={'Surname'}
              onChangeText={text => this.setState({text})}
            />

            {/* datepicker */}
            <TouchableOpacity
              onPress={() => this.setState({showDateTimePicker: true})}>
              <View style={[styles.textinput,{justifyContent:'center',paddingLeft:5}]}>
                <Text style={styles.datePickerSelect}>Select birthdate</Text>
              </View>
            </TouchableOpacity>

            {/* note */}
            <TextInput
              style={styles.textarea}
              label="Note"
              returnKeyType="done"
              value={note}
              placeholder={'Note'}
              multiline={true}
              maxLengh={'200'}
              onChangeText={text => this.setState({text})}
            />
          </View>
          {/* <View style={styles.bottomContainer}></View> */}
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={this.onCreateAccPressed}>
            <ImageButton
              image={R.images.Icons.new_user_rec}
              text={''}
              iconStyle={commonStyle.imgStyle}
              textStyle={styles.imgNewUserRec}
            />
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          supportedOrientations={['portrait', 'landscape']}
          headerTextIOS="Pick a date"
          mode={'date'}
          // minimumDate={moment(new Date()).toDate()}
          isVisible={this.state.showDateTimePicker}
          date={new Date(this.state.date)}
          onConfirm={date => {
            this.handleDateTimeChange(date);
          }}
          onCancel={this.hideDatePicker}
        />
      </View>
    );
  }
}

export default CreateAccount;
