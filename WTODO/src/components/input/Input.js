import React from "react";
import {View,Text,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Input.style'

const Input = ({placeHolder,onChangeText,iconName}) => {
    return(
        <View style={styles.container} >
            <TextInput placeholder={placeHolder} onChangeText={onChangeText}/>
            <Icon name={iconName} size={24} />
        </View>
    )
}
export default Input