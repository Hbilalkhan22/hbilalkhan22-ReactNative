import React, { Component } from 'react';
import {View ,Text, StyleSheet,Button,TextInput, Modal} from 'react-native';

const GoalInput = props =>{
  const btnAddGoalHandler = () =>{
    
  }
    return(
      <Modal visible={props.visible} animationType = "fade">
        <View style = {styles.inputContainer}>
        <TextInput 
         placeholder = "Input your Name" 
         style = {styles.txtInput} 
         onChangeText = {props.goalInputHandler}
         value = {props.enterGoal}  
         />
         <View style = {styles.btnContainer}>
         <View style = {styles.ButtonStyle}>
        <Button  
         title = "Add"
         onPress = {props.addGoalHandler}
          />
          </View>
          <View style = {styles.ButtonStyle}>
          <Button title="Cancel"
            color="red"
            
            onPress = {props.hideModel}
           />
           </View>
           </View>
          </View>
          </Modal>
    );
};
const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
      },
      txtInput:{
        borderBottomColor:'black',
        borderWidth: 1,
        padding:15,
        width : '70%',
        marginBottom:10,
        
      },
      btnContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'60%',
        

       
      },
      ButtonStyle:{
        width:'40%',
      },
})
export default GoalInput;