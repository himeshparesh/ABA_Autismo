import React, { useState } from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import { View, Text, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import * as Types from '../redux/actions/types';
import { R } from '../res';

export default function SimpleImagePicker() {

// const dispatch = useDispatch();
// const storeData = useSelector((store) => store.data);  
const [imageSource, setImageSource] = useState(null);

function selectImage() {
    let options = {
        title: 'You can choose one image',
        maxWidth: 256,
        maxHeight: 256,
        noData: true,
        mediaType: 'photo',
        storageOptions: { skipBackup: true }
    };

    ImagePicker.launchImageLibrary(options, response => {
        if (response.didCancel) {
            console.log('User cancelled photo picker');
            Alert.alert('You did not select any image');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            let source = { uri: response.uri };
            setImageSource(source.uri);
            
            // dispatch({
            //     type: Types.GIFT_PHOTO,
            //     payload: {giftPhoto: response.uri}
            // });
        }
    });
}

return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            {imageSource === null ? (
                <Image
                    source={R.images.Icons.camera}
                    style={styles.imageBox}
                    resizeMode='contain'
                />
            ) : (
                <Image
                    source={{ uri: imageSource }}
                    style={styles.imageBox}
                    resizeMode='contain'
                />
            )}
        </View>

        <TouchableOpacity onPress={selectImage} style={styles.selectButtonContainer}>
            <Text style={styles.selectButtonTitle}>GIFT PHOTO</Text>
        </TouchableOpacity>
    </View>
);
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor: R.colors.white
    },

    imageContainer: {  
        borderWidth: 4,
        borderColor: R.colors.lightOrangeColor,
        resizeMode:'contain'
    },

    imageBox: {
        width: 100,
        height: 50,
        resizeMode:'contain'
    },

    title: {
        fontSize: 18,
        color: R.colors.verySoftBlueColor
    },

    selectButtonContainer: {
        borderRadius: 5,
        backgroundColor: R.colors.verySoftBlueColor
    },

    selectButtonTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});
