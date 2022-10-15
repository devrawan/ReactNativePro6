import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const TodoList = (props) => {
  return (
    <>
      {props.todos.map(item => (
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

          <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>props.onRemove(item.id)} style={{marginEnd:5}}>
            <AntDesign name="closecircleo" style={{fontSize: 30}} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.handelChecked(item.id,item.textValue,item.checked)}>
            <AntDesign name= {item.checked ? 'checkcircle' : 'checkcircleo'} style={{fontSize: 30 ,color:'#EFBBFF'}} />

          </TouchableOpacity>
          </View>
         
        </View>
      ))}
    </>
  );
};

export default TodoList;
