import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LogBox } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import colors from "./src/assets/colors/colors";
import Welcome from "./src/pages/Welcome/Welcome";
import EmailSign from "./src/pages/emailsign/EmailSign";
import Home from "./src/pages/home/Home";
import EmailLogin from './src/pages/emailLogin/EmailLogin'
import ForgetPassword from './src/pages/forgetPassword/ForgetPassword'
import Settings from './src/pages/Settings/Settings'

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
          }
          if (route.name === 'Settings') {
            iconName = 'cog'
          }
          return <FontAwesome name={iconName} color={color} size={24} />
        },
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>


  )

}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="WelcomePage" component={Welcome} />
        <Stack.Screen name="EmailSignPage" component={EmailSign} />
        <Stack.Screen name="EmailLoginPage" component={EmailLogin} />
        <Stack.Screen name="ForgetPasswordPage" component={ForgetPassword} />
        <Stack.Screen name="HomePage" component={StackNavigator} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default App