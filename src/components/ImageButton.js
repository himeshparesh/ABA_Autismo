import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function ImageButton({ image, text, iconStyle, textStyle }) {
    return (
        <View style={style.container}>
            <Image source={image} style={iconStyle} />
            <Text style={textStyle}>{text}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
    }
})