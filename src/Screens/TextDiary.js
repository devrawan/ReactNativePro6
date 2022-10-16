import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import {useTheme} from "@react-navigation/native";

const TextDiary = ({navigation}) => {
  const [ary, setAry] = useState([]);
  const { colors, dark } = useTheme();
  const addData = ob => {
    setAry([
      ...ary,
      {
        id: Math.random().toString(),
        name: ob.name,
        age: ob.age,
        checked: false,
      },
    ]);
    console.log(ary);
  };

  const onRemovee = id => {
    setAry(ary.filter(todo => todo.id !== id));
  };

  const handelCheckedd = idd => {
    const res = ary.filter(item => item.id == idd);

    var newn = [...ary];
    for (let i = 0; i < newn.length; i++) {
      if (newn[i].id == idd) {
        newn[i] = {
          id: newn[i].id,
          name: newn[i].name,
          age: newn[i].age,
          checked: !newn[i].checked,
        };
      }
    }

    setAry(newn);
  };

  return (
    <View style={[styles.cont,{backgroundColor:colors.background}]}>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('My Diary');
          }}>
          <AntDesign name="home" style={styles.iconHome} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconCheck}>
          <AntDesign
            name="checkcircleo"
            size={30}
            color="white"
            onPress={() => {
              navigation.navigate('completed', {
                todoo: [...ary],
                temp: 'anything you want here',
              });
            }}
          />
        </TouchableOpacity>
      </View>

      <Text style={[styles.title,{color:colors.text}]}>My Note</Text>

      <TodoInsert onAddObj={addData} />
      <ScrollView style={[styles.scroll,{backgroundColor:colors.background}]}>
        <TodoList
          todos={ary}
          onRemove={onRemovee}
          handelChecked={handelCheckedd}
        />
      </ScrollView>
    </View>
  );
};

export default TextDiary;
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    backgroundColor: '#9e17f4',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginBottom: 18,
    borderBottomWidth: 2,
    paddingTop: 50,
  },
  iconHome: {
    fontSize: 30,
    color: 'white',
    marginTop: 3,
  },
  iconCheck: {
    paddingTop: 5,
  },
  title: {
    color: 'black',
    fontSize: 30,
    marginTop: 2,
    marginBottom: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
  scroll: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 25,
  },
});
