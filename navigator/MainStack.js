import React from 'react';
import { NavigationContainer,DefaultTheme, DarkTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainDiary from '../src/Screens/MainDiary';
import TextDiary from '../src/Screens/TextDiary';
import Completed from '../src/Screens/Completed';
import { useColorScheme } from 'react-native';
import { DarkValues, LightValues} from '../src/utils/theme';
const Stack = createStackNavigator();
const MainStack =() =>{
    const scheme = useColorScheme();
    return(
        <NavigationContainer theme={scheme === 'dark' ? DarkValues : LightValues}>
        <Stack.Navigator>
          <Stack.Screen name='My Diary' component={MainDiary} options={{headerShown:false}}/>
          <Stack.Screen name='Text Diary' component={TextDiary}
          options={{headerShown:false}}
          />
          <Stack.Screen  name ='completed' component={Completed}   options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default MainStack;