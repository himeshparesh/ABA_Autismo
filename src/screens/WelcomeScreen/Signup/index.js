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
import { COLORS } from "../styles/Colors";
import AuthStackStyles from "../styles/AuthStackStyles";
import { validateEmail, setAccessToken } from "../utile/UtilityFuncation";
import { showToast } from "../utile/UIUtilityFunc";
import Loader from "./Comman/Loader";
import { images } from "../utile/imagePath";
import GLOBALS from "./globals/global";


class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eMail: "",
      screenHeight: 0,
      loading: false,
    };
  }

  

  onLoginButtonPress = () => {
    
    Keyboard.dismiss();
    if (this.validate()) {
      this.setState({ loading: true, disable: true });
      this.requestForLogin();
    }
  };

 

  validate() {
    this.setState({ validationError: null });

    const { eMail, password } = this.state;

    if (eMail.length == 0) {
      showToast("Please provide the email!");
      return false;
    } else if (password.length == 0) {
      showToast("Please provide the password!");
      return false;
    } else {
      if (!validateEmail(eMail)) {
        showToast("Please provide a valid email!");
        return false;
      }
    }

    return true;
  }

 
  renderLoginFormView() {
    return (
      <View>
        <TextInput
          style={AuthStackStyles.loginEmailInput}
          autoCapitalize="none"
          keyboardType={"email-address"}
          placeholder={"Email (Eg : xyz@gmail.com)"}
          onChangeText={text => {
            this.setState({ eMail: text });
          }}
        />
          <TouchableOpacity
            activeOpacity={0.8}
            style={AuthStackStyles.touchTxt}
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
      <View style={AuthStackStyles.loginContainer}>
        <Loader loading={this.state.loading} />

        <KeyboardAvoidingView
          style={AuthStackStyles.authKeyAvoidStyle}
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
            <View style={AuthStackStyles.loginHeaderView}>
              <Image
                source={images.commonImage.flavorLogo}
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
                backgroundColor: COLORS.ColorPrimaryLightTheme,
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
