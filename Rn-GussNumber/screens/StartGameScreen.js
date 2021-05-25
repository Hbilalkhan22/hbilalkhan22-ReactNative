import React, { useState } from 'react';
import { View ,StyleSheet,Text,Button, TouchableWithoutFeedback, Keyboard,Alert, ProgressViewIOSComponent } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/Colors';

const StartGameScreen = (props) =>{
    const [enterValue,setEnterValue] = useState('');
    const [confirmed , setConfirmed] = useState(false);
    const [selectedNumber , setSelectedNumber] = useState()

    const inputTextHandler = inputText =>{
        setEnterValue(inputText.replace(/[^0-9]/g,'')); // here we are actully replaceing point or comma with none
        // with which we can achive number validation.
    };
    const resetTextHandler = () =>{
        setEnterValue('');
        setConfirmed(false);
    }

    const confirmInputHandler  = () =>{
        const chosenNumber = parseInt(enterValue);
        if(isNaN(chosenNumber)  || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid Number',
                'Number has to be between 1 to 99',
                [{text:'Okay',style :'destructive',onPress:resetTextHandler}]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnterValue('');
        Keyboard.dismiss();

    }
    let confrimOutPut;
    if(confirmed){
        confrimOutPut = (
                        <Card style = {styles.summaryContainer}>
                            <Text>You Selected</Text> 
                            <NumberContainer>{selectedNumber}</NumberContainer>
                            <Button title = "Start Game" onPress = {() =>{props.onStartGame(selectedNumber)}}/>
                        </Card>
        )}
    return(
        <TouchableWithoutFeedback onPress = {()=>{
                Keyboard.dismiss();
        }}>
        <View style = {styles.screen}>
            <Text style = {styles.title}>Start a New Game!</Text>
            <Card style = {styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input 
                 style = {styles.input} 
                 blurOnSubmit 
                 autoCapitalize = 'none'
                 autoCorrect = {false}
                 keyboardType = "numeric"
                 maxLength={2} 
                 onChangeText = {inputTextHandler}
                 value = {enterValue} />   
            
             <View style = {styles.buttonContainer}>
                <View style={styles.buttonStyle}>
                <Button  
                 title = "Reset"
                 color={Colors.danger}
                 onPress = {resetTextHandler}    
                 />
                </View>
                <View style={styles.buttonStyle}>
                <Button 
                 title = "Confirm" 
                 color = {Colors.success}
                 onPress = {confirmInputHandler}
                 />
                </View>
             </View>
            </Card>
            {confrimOutPut}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        

    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    buttonStyle:{
        width:100,
        
    },
    input:{
        width:50,
        textAlign:'center',
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center',
        
    }
    

});

export default StartGameScreen;