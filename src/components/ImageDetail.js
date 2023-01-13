import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";
// import forestImg from '../../assets/forest'

const ImageDetail = (props) => {
    return <View>
        <Image source = {props.imageSource}/>
        <Text>Yodilidey {props.title}</Text>
        <Text>{props.score}</Text>
        </View>
}

const styles = StyleSheet.create({})

export default ImageDetail;