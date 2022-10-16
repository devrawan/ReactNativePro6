import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from "@react-navigation/native";

const TodoInsert = props => {
  const [data, setData] = useState({name: '', age: ''});
  const { colors, dark } = useTheme();

  return (
    <>
      <View
        style={styles.cont}>
        <TextInput
placeholderTextColor="gray"
          placeholder="Enter your name "
          value={data.name}
          onChangeText={value => setData({...data, name: value})}
          style={[styles.input,{backgroundColor:colors.background,borderColor:colors.text,color:colors.text}]}
        />
        <TextInput
      placeholderTextColor="gray"
          placeholder="Enter your age "
          value={data.age}
          onChangeText={value => setData({...data, age: value})}
          style={[styles.input,{backgroundColor:colors.background,borderColor:colors.text,color:colors.text}]}
        />

        <TouchableOpacity
          onPress={() => {
            props.onAddObj(data);
            setData('');
          }}
          style={styles.btnView}>
          <Text style={[styles.txt,{color:colors.text}]}> Add</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TodoInsert;
const styles = StyleSheet.create({
  cont:{
    paddingVertical: 10,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  input:{
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor:'black',
    
  },
  btnView:{
    marginTop: 5,
    borderRadius: 15,
    width: '40%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9e17f4',
    alignSelf: 'center',
  },
  txt:{
    fontSize: 18, color: 'white'
  }
})