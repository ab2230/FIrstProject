import {useState} from 'react';
import { StyleSheet, Text, View , Button, TextInput, ScrollView} from 'react-native';

export default function App() {
    const [enteredGoal,setEnteredGoal] = useState('');
    const [goals,setGoals] = useState([]);
  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText)
  }

  function addGoalHandler(){
    setGoals(existingGoals => [...existingGoals,enteredGoal])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.theAbove}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder='The Task You Have To Complete'/>
        <Button title='Add' onPress={addGoalHandler}/>
        </View>
      <View>
      <ScrollView>
        <Text>List of goals...</Text>
        {
          goals.map((goal) =>{
            return(
              <View key={goal} style={styles.goalItem}>
                <Text style={styles.goalText} >{goal}</Text>
              </View>
              
            )
          })
        }
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   appContainer:{
    padding: 50,
    paddingTop:75
   },
   theAbove:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:20,
    marginBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'#dddddd'
   },
   textInput:{
    borderWidth:1,
    borderColor:'#dddddd',
    width:'80%',
    padding:10
   },
   goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc'
   },
   goalText:{
    color:'white'
   }
}); 
