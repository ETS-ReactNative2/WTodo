import React from 'react'
import {View,Text} from 'react-native'
import styles from './Header.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Header = () => {
    return(
        <View style={styles.container} >
            <Icon name='star-check' size={30} color='white' style={styles.staricon1} />
            <Text style={styles.header_text} >WTODO</Text>
            <Icon name='star-check' size={30} color='white' style={styles.staricon2} />
        </View>
    )
}
export default Header