import React, { Component, useState, useRef } from 'react';
import { Text ,View ,StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomNumber = (min ,max , exclude) =>{
    min  = Math.ceil(min);
    max = Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    if(rndNumber === exclude){
        return
        generateRandomNumber(min, max, exclude);
    }else{
        return rndNumber;
    }
} 

const GameScreen = (props) =>{
    const [currentGuess , setCurrentGuess] = useState(generateRandomNumber(1,100,props.userChoice))
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const nextGuessHandler = (direction) =>{
        if(
            (direction === 'lower ' && currentGuess < props.userChoice )
             || (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert('Don\'t lie! ','You know that this is wrong...',
            [{text:'Sorry!', style: 'cancel'}]); 
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }
        const nextNumber  = generateRandomNumber(currentLow.current,currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
    };
    return(
        <View style = {styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style = {styles.buttonContainer}>
                <Button title = "LOWER" onPress={nextGuessHandler.bind(this,'lower')} />
                <Button title = "GREATER" onPress={nextGuessHandler.bind(this,'greater')} />
            </Card>
        </View>
)}

styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth: '80%',
    }
});

export default GameScreen;

