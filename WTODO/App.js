import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {LogBox} from 'react-native'
import Welcome from "./src/pages/Welcome/Welcome";
import EmailSign from "./src/pages/emailsign/EmailSign";
import Home from "./src/pages/home/Home";
LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return(
    
      <Tab.Navigator screenOptions={{headerShown:false}} >
        <Tab.Screen name="HomeScreen" component={Home} />
      </Tab.Navigator>
    

  )
  
}

const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="WelcomePage" component={Welcome} />
    <Stack.Screen name="EmailSignPage" component={EmailSign} />
    <Stack.Screen name="HomePage" component={StackNavigator} />
  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App