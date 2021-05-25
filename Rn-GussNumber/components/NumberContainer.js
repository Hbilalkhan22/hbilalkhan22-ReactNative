import React, { Component } from 'react';
import { Text ,View ,StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const NumberContainer = (props) =>{
return(
    <View style = {styles.container}>
        <Text style = {styles.numberStyle}>{props.children}</Text> 
    </View>

)};

styles = StyleSheet.create({
    container:{
        borderWidth: 2,
       
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.primary,
    },
    numberStyle:{
       color: Colors.primary,
        fontSize:20,
    }
});

export default NumberContainer;

