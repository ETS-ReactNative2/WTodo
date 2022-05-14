import React from "react";
import { TextInput, TouchableOpacity,Text, View } from "react-native";
import styles from './AddTaskModal.style'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const AddTaskModal = ({isVisible,onClose,onPressSendIcon,onPressAddTask,onPressCalendar,onChangeText}) => {
    return(
        <Modal
        animationInTiming={600}
        animationOutTiming={600}
        swipeDirection='down' 
        onSwipeComplete={onClose}
        style={styles.modal}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        isVisible={isVisible} >
            <View style={styles.container} >
            <View style={styles.input_container} >
            <TextInput
            onChangeText={onChangeText}
            placeholder="What would you like to do?..."
            placeholderTextColor='#EAEDF1'
            style={styles.input}
            />
            <FontAwesome name="tasks" size={24} color='white'  />
            </View>

            <TouchableOpacity style={styles.calendar_container} onPress={onPressCalendar} >
            <Text style={styles.calendartext} >Add finish time</Text>
            <Icon name="calendar" color={'white'} size={24} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.addtaskbutton} onPress={onPressAddTask} >
                <Text style={styles.buttontext} >ADD TASK</Text>
            </TouchableOpacity>

            </View>
        </Modal>
    )
}
export default AddTaskModal