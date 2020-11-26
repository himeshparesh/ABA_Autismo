import React from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native';

class index extends Component {
        constructor(props) {
            super(props);
            this.state = {  };
        }

        onPressSelectUser = () => {
            alert("select")
        }

        onPressNewUser = () => {
            alert("new user")
        }

        render() {
            return (
                <View style={{flex:1}}>
                    <View style={{flex:1}}><TouchableHighlight onPress={this.onPressSelectUser}><Text>Select user</Text></TouchableHighlight></PonPress={this.onPressSelectUser}iew>
                    <View style={{flex:1}}><TouchableHighlight onPress={this.onPressNewUser}><Text>New User</Text></TouchableHighlight></View>
                </View>
            );
        }
    }
    
    export default index;