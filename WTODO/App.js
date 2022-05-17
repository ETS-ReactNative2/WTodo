import React,{useEffect,useState} from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LogBox,TouchableOpacity } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as BootSplash from 'react-native-bootsplash'

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
  "Warning: Can't perform a React state update on an unmounted component."
])

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const App = () => {
  const [userSession, setUserSession] = useState();
  useEffect(() => {
    auth().onUserChanged(user => {
      setUserSession(!!user)
    })
  }, [])

  const goSignOut = async () => {
    try {
      await GoogleSignin.signOut();
     auth().signOut();
     setUserSession(!userSession)
    } catch (error) {
      console.log(error)
    }
    
}

  return (
    <NavigationContainer onReady={() => BootSplash.hide()} >
      <Stack.Navigator  >

        {!userSession ?  <Stack.Screen options={{headerShown:false}} name="WelcomePage" component={Welcome} /> : 
        <Stack.Screen
        options={{
          title: `WTODO`,
          headerRight: () =>
           <TouchableOpacity> 
            <Icon name='logout' size={30} color='white'
              onPress={goSignOut} />
              </TouchableOpacity>,
          headerTitleStyle: 'white',
          headerTintColor: 'white',
          headerTitleStyle:{fontSize:24,fontFamily:'RobotoCondensed-BoldItalic'},
          headerStyle: { backgroundColor: colors.navyblue, height:100 },
          headerTitleAlign:'center',
          headerLeft: () => <Icon name="logout" size={80} color={colors.navyblue} />
          
        }}
        name="HomePage" component={Home} />
        }
       
        <Stack.Screen options={{headerShown:false}} name="EmailSignPage" component={EmailSign} />
        <Stack.Screen options={{headerShown:false}} name="EmailLoginPage" component={EmailLogin} />
        <Stack.Screen options={{headerShown:false}} name="ForgetPasswordPage" component={ForgetPassword} />
        
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default App