import React from 'react';
import {Text, View, TouchableOpacity,StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from "@react-navigation/native";

const TodoList = props => {
  const { colors, dark } = useTheme();

  return (
    <>
      {props.todos.map(item => (
        <View
          key={item.id}
          style={[styles.cont,{backgroundColor:colors.background}] }>
          <TouchableOpacity
            onPress={() => props.onRemove(item.id)}
            style={{marginEnd: 5}}>
            <AntDesign name="closecircleo" style={{fontSize: 30,color:'#9e17f4'}} />
          </TouchableOpacity>
          <Text style={{fontSize: 16,color:colors.text}}>{` Name: ${item.name}  ..   Age: ${item.age} `}</Text>
          <TouchableOpacity
            onPress={() =>
              props.handelChecked(item.id, item.name, item.age, item.checked)
            }>
            <AntDesign
              name={item.checked ? 'checkcircle' : 'checkcircleo'}
              style={{fontSize: 30, color: '#9e17f4'}}
            />
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default TodoList;
const styles =StyleSheet.create({
  cont:{
    width: '90%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderColor: '#9e17f4',
    borderRadius: 15,
    borderWidth: 2,
  }
})
