import React from "react";
import { TouchableOpacity,Text, ActivityIndicator } from "react-native";
import styles from './LoginButton.style'

const LoginButton = ({buttontext,onPress,loading,theme}) => {
    return(
        <TouchableOpacity
        style={styles[theme].container}
        onPress={onPress} >
            {loading? <ActivityIndicator size={'small'} color='white' />:
            <Text style={styles[theme].text} >{buttontext}</Text>
            }
        </TouchableOpacity>
    )
}
export default LoginButton