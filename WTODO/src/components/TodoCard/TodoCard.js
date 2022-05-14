import React from "react";
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from "../../assets/colors/colors";
import Header from "../Header/Header";
import styles from './TodoCard.style'

const TodoCard = ({todo,index}) => {
    const [isCompleted,setIsCompleted] = React.useState(false)
    return(
        <View style={styles.container} >
            <Text style={styles.index_text} >{index+1}- </Text>
           <View style={styles.text_view} >
            <Text 
            numberOfLines={2}
            style={[styles.todotext,{textDecorationLine:isCompleted?'line-through':'none'}]} >{todo.task}</Text>
            </View>
            <View style={styles.iconview} >
                <Icon 
                name="check-circle" 
                size={22} 
                color={isCompleted?'#14D41A':'red'} 
                solid={isCompleted} 
                onPress={()=>setIsCompleted(!isCompleted)} />
                <Icon 
                name="trash"
                size={22}
                color={'gray'}
                />
            </View>
        </View>
    )
}
export default TodoCard