//how different components work together
import React, { Component } from 'react';
//take information from those components and show something
import {Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = "Carlin the Big Bo Jamma Programma";

    return  (
            <View>
              <Text style = {styles.textStyle}>This is the components screen</Text>
              <Text style = {styles.subText}>My name is {name}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subText : {
        fontSize: 30
    }
})

export default ComponentsScreen;