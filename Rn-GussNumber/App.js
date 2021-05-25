import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber , setUserNumber] = useState();

  const startGameHandler = selectedNumber =>{
    setUserNumber(selectedNumber);
  }

  let screenContent = <StartGameScreen onStartGame = {startGameHandler} />

  if(userNumber){
    screenContent = <GameScreen  userChoice = {userNumber} />;
  }
  return (
    <View style={styles.container}>
      <Header title = "Guess a Number"/>
      {screenContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
