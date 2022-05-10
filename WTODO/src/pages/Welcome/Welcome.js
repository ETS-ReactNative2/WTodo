import React,{useEffect} from 'react'
import {View,Text, Button,Image,Animated,Dimensions} from 'react-native';
import CheckLottie from '../../components/checkLottie/CheckLottie';
import styles from './Welcome.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as BootSplash from 'react-native-bootsplash'


const bootSplashLogo = require('../../../assets/images/launch_screen.jpg');
 
const Welcome = ({navigation}) => {
    const [bootSplashIsVisible, setBootSplashIsVisible] = React.useState(true);
  const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] =
    React.useState(false);
  const opacity = React.useRef(new Animated.Value(1));
  const translateY = React.useRef(new Animated.Value(0));

  const init = async () => {
    try {
      await BootSplash.hide();

      Animated.stagger(250, [
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: -100,
        }),
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: Dimensions.get("window").height,
        }),
      ]).start();

      Animated.timing(opacity.current, {
        useNativeDriver: true,
        toValue: 0,
        duration: 300,
        delay: 150,
      }).start(() => {
        setBootSplashIsVisible(false);
      });
    } catch (error) {
      setBootSplashIsVisible(false);
    }
  };

  React.useEffect(() => {
    bootSplashLogoIsLoaded && init();
  }, [bootSplashLogoIsLoaded]);
    return(
            <View style={styles.container} >
      {bootSplashIsVisible==true ? (
        <Animated.View
          style={[
            styles.bootsplash,
            { opacity: opacity.current },
          ]}
        >
          <Animated.Image
            source={bootSplashLogo}
            fadeDuration={0}
            resizeMode="contain"
            onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
            style={[
              styles.logo,
              { transform: [{ translateY: translateY.current }] },
            ]}
          />
        </Animated.View>
      ):
      <>
      <View style={styles.lottie_view} >
      <CheckLottie/>
      </View>
      <Text style={styles.header_text} >WTodo</Text> 
      <Text style={styles.description_text} >Know What To Do</Text>
      <View style={styles.privacy_container} >
          <Text style={styles.andtext} >Sign In WeTodo</Text>
          <View style={styles.privacy_container2} >
              <Text style={styles.privacy_text} >Terms of use </Text>
              <Text style={styles.andtext} >and </Text>
              <Text style={styles.privacy_text} >Privacy Policy </Text>
          </View>
      </View>
      <Text style={styles.withthistext} >Sign in with this</Text>
      <View style={styles.lineview} ></View>
      <View style={styles.auth_container}>
      <View style={styles.google_container} >
          <Image source={require('../../../assets/images/google.png')} style={styles.google_image} />
      </View>
      <Text>or</Text>
      <View style={styles.email_container} >
          <Icon name='email' size={36} color='black' />
      </View>
      </View></>}
            </View>
        
    )
}
export default Welcome