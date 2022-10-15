import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainDiary from './src/Screens/MainDiary';
import TextDiary from './src/Screens/TextDiary';

import Completed from './src/Screens/Completed';




const Stack = createStackNavigator();
const App = () => {
  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name='My Diary' component={MainDiary} options={{headerShown:false}}/>
         <Stack.Screen name='Text Diary' component={TextDiary}
         options={{headerShown:false}}
         />
         <Stack.Screen  name ='completed' component={Completed}   options={{headerShown:false}}/>
       </Stack.Navigator>
     </NavigationContainer>


  




  );
}

export default App;
