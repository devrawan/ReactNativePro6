import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
var finishedTask = [];


const Completed = ({navigation, route}) => {
  const [comNotes,setComNotes] =useState([]);
  const {todoo, temp} = route.params;
  let arr = {...todoo};
 
  useEffect(()=>{
    hand();
  },[])



  const hand = () => {
    finishedTask = todoo.filter(todo => todo.checked == true);
    console.log(finishedTask);
    setComNotes(finishedTask)
  };

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', paddingTop: 50}}>
      <Text style={{fontSize: 25, marginVertical: 20}}>Completed Notes</Text>
      {/* {hand()} */}
      {comNotes.map(item => (
        <View
          key={item.id}
          style={{
            width: '90%',
            height: 60,
            justifyContent: 'space-between',
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: 10,
            flexDirection: 'row',
            paddingHorizontal: 10,
            borderColor: '#EFBBFF',
            borderRadius: 15,
            borderWidth: 2,
          }}>
          <Text>{item.textValue}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Completed;
