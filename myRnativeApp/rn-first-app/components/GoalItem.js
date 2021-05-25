import React, { Component } from 'react';
import {View ,Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props =>{
    return(
        <TouchableOpacity onPress = {props.DeleteItem.bind(this,props.id)}>
    <View style = {styles.listItem}>
       <Text >{props.title }</Text>
      </View>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    listItem :{
        padding:10,
        borderWidth:1,
        backgroundColor:'#ccc',
        borderColor:'black',
        marginVertical:2
     
       }
})
export default GoalItem;