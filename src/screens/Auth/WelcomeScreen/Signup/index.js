import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  AsyncStorage,
  Alert
} from "react-native";
// import { validateEmail } from "../utile/UtilityFuncation";

import Loader from "../../../../components/Loader";
import { U } from "../../../../Utility";
import { R } from "../../../../res";


class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eMail: "",
      password: "",
      screenHeight: 0,
      loading: false,
    };
  }


  validate() {
    
    const { eMail, password } = this.state;

    if (eMail.length == 0) {
     U.utility.showMessage("Please provide the email!");
      return false;
    } else if (password.length == 0) {
      U.utility.showMessage("Please provide the password!");
      return false;
    } else {
      // if (!validateEmail(eMail)) {
      //   U.utility.showMessage("Please provide a valid email!");
      //   return false;
      // }
    }

    return true;
  }

 
  renderLoginFormView() {
    return (
      <View>
        <TextInput
          // style={AuthStackStyles.loginEmailInput}
          autoCapitalize="none"
          keyboardType={"email-address"}
          placeholder={"Email (Eg : xyz@gmail.com)"}
          onChangeText={text => {
            this.setState({ eMail: text });
          }}
        />
          <TouchableOpacity
            activeOpacity={0.8}
            // style={AuthStackStyles.touchTxt}
            onPress={this.managePasswordVisibility}
          >
          <Text>login</Text>
            {/* <Image
              source={
                this.state.hidePassword
                  ? require("../../assets/icons/hidePass.png")
                  : require("../../assets/icons/showPass.png")
              }
              style={AuthStackStyles.imgView}
            /> */}
          </TouchableOpacity>
      </View>
    );
  }
  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    const scrollEnabled = true;
    return (
      // style={AuthStackStyles.loginContainer}
      <View > 
        <Loader loading={this.state.loading} />

        <KeyboardAvoidingView
          // style={AuthStackStyles.authKeyAvoidStyle}
          // behavior = "padding"
          keyboardShouldPersistTaps={"handled"}
        >
          <ScrollView
            style={{
              width: "100%"
            }}
            keyboardShouldPersistTaps={"handled"}
            scrollEnabled={scrollEnabled}
            onContentSizeChange={this.onContentSizeChange}
            contentContainerStyle={{
              flexGrow: 1
            }}
          >
          {/* style={AuthStackStyles.loginHeaderView} */}
            <View >
              <Image
                source={R.images.Icons.logo}
                style={{
                  height: "70%",
                  width: "70%",
                  alignContent: "center",
                  resizeMode: "contain"
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: R.colors.grayishGreenColor,
                alignSelf: "center",
                top: 50,
                width: "85%"  
              }}
            >
              {this.renderLoginFormView()}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default CreateAccount;
