import React from 'react';
import { SafeAreaView ,Text,Button,View,ScrollView,TouchableOpacity,Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
//import logo from '../assets/images/logo.png'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const MainDiary =({navigation})=>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#EFBBFF'}}>
            <View style={{ paddingVertical:15,paddingHorizontal:15,justifyContent:'center',alignItems:'center',height:'100%'}}>
            <View style={{ marginVertical:20}}>
            <Image
                    source={{uri:'https://i.pinimg.com/originals/af/6b/f5/af6bf58dfc5182bbbc05f31313e7bbf3.png'}}
                    style={{  height: 300,
                        alignSelf:'center',
                        width: 300,
                        borderRadius: 50,
                        borderColor: "#fff",
                        borderWidth: 3,}} />
                    </View>
            <TouchableOpacity 
           
            style={{
                alignSelf:'center',
                justifyContent:'center',
                width:220,backgroundColor:'#9e17f4',marginVertical:7,
            marginHorizontal:7,borderRadius:10,height:55,paddingVertical:4}}>
           <Button 
            onPress={()=>{navigation.navigate('Text Diary')}}
           title='Text Diary' 
           color='white'/>
           </TouchableOpacity>
           </View>
        </SafeAreaView>
    )
}

export default MainDiary ;