import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useTheme} from "@react-navigation/native";

var finishedTask = [];

const Completed = ({navigation, route}) => {
  const { colors, dark } = useTheme();
  const [comNotes, setComNotes] = useState([]);
  const {todoo, temp} = route.params;
  let arr = {...todoo};

  useEffect(() => {
    fitch();
  }, []);

  const fitch = () => {
    finishedTask = todoo.filter(todo => todo.checked == true);
    console.log(finishedTask);
    setComNotes(finishedTask);
  };

  return (
    <View style={[styles.cont,{backgroundColor:colors.background}]}>
      <View
        style={styles.headerView}>
        <Text style={[styles.title,{color:colors.text}]}>Completed Notes</Text>
      </View>

      {comNotes.map(item => (
        <View key={item.id} style={[styles.itemView,{backgroundColor:colors.background}]}>
          <Text style={{fontSize: 16,color:colors.text}}>{` Name :${item.name}   ..   `}</Text>
          <Text style={{fontSize: 16,color:colors.text}}>{` Age :${item.age} `}</Text>
        </View>
      ))}
    </View>
  );
};

export default Completed;
const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
headerView:{
  backgroundColor: '#9e17f4',
  height: 100,
  flexDirection: 'row',
  justifyContent: 'center',
  paddingHorizontal: 25,
  marginBottom: 18,
  borderBottomWidth: 2,
},
  title: {
    fontSize: 25,
    marginVertical: 20,
    alignSelf: 'flex-end',
  },
  itemView: {
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderColor: '#9e17f4',
    borderRadius: 15,
    borderWidth: 2,
  },
});
