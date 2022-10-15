import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
const TextDiary = ({navigation}) => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
    
  };

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handelChecked = (idd) => {
    const res = todos.filter(item => item.id == idd);

    var newn = [...todos];
    for (let i = 0; i < newn.length; i++) {
      if (newn[i].id == idd) {
        newn[i] = {
          id: newn[i].id,
          textValue: newn[i].textValue,
          checked: !newn[i].checked,
        };
      }
    }

    setTodos(newn);
    // console.log(todos);
    // console.log(newn);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: '#9e17f4',
          height: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 25,
          marginBottom: 18,
          borderBottomWidth: 2,
          paddingTop: 50,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('My Diary');
          }}>
          <AntDesign
            name="home"
            style={{fontSize: 30, color: 'white', marginTop: 3}}
          />
        </TouchableOpacity>


        <TouchableOpacity style={{paddingTop: 5}}>
          <AntDesign
            name="checkcircleo"
            size={30}
            color="white"
            onPress={() => {
              navigation.navigate('completed', {
                todoo: [...todos],
                temp: 'anything you want here',
              });
            }}
          />
        </TouchableOpacity>


      </View>

      <Text
        style={{
          color: 'black',
          fontSize: 30,
          marginTop: 2,
          marginBottom: 15,
          fontWeight: '400',
          textAlign: 'center',
          backgroundColor: 'white',
        }}>
        My Note
      </Text>

      <TodoInsert onAddTodo={addTodo} />

      <ScrollView
        style={{
          backgroundColor: '#fff',
          flex: 1,
          borderRadius: 10,
          marginLeft: 8,
          marginRight: 8,
          marginBottom: 25,
        }}>
        <TodoList
          todos={todos}
          onRemove={onRemove}
          handelChecked={handelChecked}
        />
      </ScrollView>
    </View>
  );
};

export default TextDiary;
