import React from 'react';
import {Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 23},
        {name: 'Friend #2', age: 27},
        {name: 'Friend #3', age: 28},
        {name: 'Friend #4', age: 30},
        {name: 'Friend #5', age: 32},
        {name: 'Friend #6', age: 33},
        {name: 'Friend #7', age: 27},
        {name: 'Friend #8', age: 25},
        {name: 'Friend #9', age: 34}
    ]

    return <FlatList 
    
    showsHorizontalScrollIndicator= {false}
        keyExtractor={friend => friend.name}
        data = {friends} 
        renderItem= {({item}) => {
            return <View>
            <Text style = {styles.textStyle}>{item.name}  Age: {item.age} </Text>
            {/* <Text>       Age: {item.age} </Text> */}
            </View>
    }}
    />
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;