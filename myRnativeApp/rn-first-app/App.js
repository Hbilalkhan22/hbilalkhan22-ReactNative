import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInout';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enterGoal,setEnterGoal] = useState('');
  const [courseGoals,setCourseGoals] = useState([]);
  const [isAddModel,setIsAddModel] = useState(false)

const goalInputHandler = (inputGoal) => {
  setEnterGoal(inputGoal);
  // console.log(inputGoal);

}

const addGoalHandler = () => {
  // console.log(enterGoal);
  setCourseGoals(currentGoals => [...currentGoals,
   {id : Math.random().toString(), value: enterGoal} ]);
   setIsAddModel(false);
   setEnterGoal('');
}
const DeleteItem = (itemId) =>{
 // console.log("hello Item is touched.."+itemId);
  setCourseGoals(currentGoals => {
return currentGoals.filter((goal) => goal.id !== itemId);
 });
 

}
const hideModel = () =>{
  setIsAddModel(false);
}

  return (
    <View style = {styles.screen}>
    <Button title = "Add new Model" onPress = {()=>setIsAddModel(true)}/>
      <GoalInput 
       goalInputHandler = {goalInputHandler}
       enterGoal = {enterGoal} 
       addGoalHandler = {addGoalHandler}
       visible = {isAddModel}
       hideModel = {hideModel} />

      
          <FlatList 
                     keyExtractor = {(item, index) => item.id}
       data = {courseGoals}
                       renderItem = {itemData => <GoalItem  id = {itemData.item.id} DeleteItem = {DeleteItem} title = {itemData.item.value}/>}  
       />
      {/* <ScrollView >
      {courseGoals.map((goal) => 
      <View 
       style = {styles.listItem} 
       key = {goal}>
       <Text >{goal}</Text>
      </View>)}
        {/* <Text >Out put View</Text> */}
      {/* </ScrollView> */} 
    </View>




    
    
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50 ,
    // flexDirection : 'row',
    // justifyContent : 'space-between',
    // alignItems : 'center'

  },
 
 

});
// <View 
    // style = {{
    //   padding:50, 
    //   flexDirection : 'row' , 
    //   width:'80%' , 
    //   height : 300 , 
    //   justifyContent : 'space-around', 
    //   alignItems : 'stretch'
    //   }}>
    // <View
    // style = {{
    //     backgroundColor: 'red',
    //   flex:1,
    //     justifyContent : 'center',
    //     alignItems : 'center'
    // }}
    // >
    //   <Text>1</Text>
    // </View>
    // <View style = {{
    //    backgroundColor: 'blue',
    //    flex:1,
    //     justifyContent : 'center',
    //     alignItems : 'center',
    //     Colors : 'white'

    // }}>
    //   <Text>2</Text>
    // </View>
    // <View style = {{
    //   backgroundColor : 'green',
    //   flex:1,
    //   justifyContent  : 'center',
    //   alignItems : 'center',
      
      


    // }}>

    //   <Text>3</Text>
    // </View>
    // <View  style = {styles.screen}>
    //    <View  style={styles.txtInput}>
    // <TextInput  
    //  placeholder="Your Goal"
    
    //  onChangeText = {goalInputHandler}
    //  value = {enterGoal}


    // />
    // <Button
    //   title="Add Me" 
    //   onPress = {addGoalHandler}

    // />
    // </View>
    // <View>
    //   {courseGoals.map((goal) => <Text>{goal}</Text>)}
    // </View>

    //   </View> 
