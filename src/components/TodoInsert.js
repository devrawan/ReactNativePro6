import React, { useState } from 'react';
import {  Text, View, TextInput, Button, TouchableOpacity} from 'react-native';



const TodoInsert=(props)=>{
const [val ,setVal] = useState();
    return(
        <View style={{flexDirection:'row',height:60,justifyContent:'space-between',alignContent:'center',borderWidth:1,marginHorizontal:10,marginVertical:10,borderRadius:15,borderColor:'#EFBBFF'}}>
            <TextInput   
            value={val}
            onChangeText ={setVal}
            style={{width:'80%',paddingHorizontal:10,borderBottomLeftRadius:15,borderTopLeftRadius:15}} />
            <TouchableOpacity 
            onPress={()=>{
                props.onAddTodo(val)
                setVal('')
            }}
            style={{width:'20%',justifyContent:'center',alignItems:'center',backgroundColor:'#EFBBFF',borderBottomRightRadius:15,borderTopRightRadius:15}}>
                <Text style={{fontSize:18}}> Add</Text>
            </TouchableOpacity>
          
    
            </View>
    )
}



export default TodoInsert;