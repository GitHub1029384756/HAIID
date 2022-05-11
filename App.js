import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login.js";
import SignUp from "./screens/SignUp.js";
import Splash from "./screens/Splash.js";
import Welcome from './screens/Welcome.js';
import TabNav from './screens/TabNav.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="TabNav" component={TabNav}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack