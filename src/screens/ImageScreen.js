import React from "react";
import { Text, StyleSheet, View, Button, } from "react-native";
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return <View>
        <ImageDetail score = "10/10 quality!" title="Forest" imageSource = {require('../../assets/forest.jpg')}/>
        <ImageDetail score = "7/10 could be better" title="Beach" imageSource = {require('../../assets/beach.jpg')}/>
        <ImageDetail score = "4/10 meh" title="Mountain" imageSource = {require('../../assets/mountain.jpg')}/>
    </View>
}

const styles = StyleSheet.create({})

export default ImageScreen;