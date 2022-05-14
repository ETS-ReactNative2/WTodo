import React from "react";
import {View,Text} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimePicker = ({isDateTimeVisible,handleConfirm,handleCancel}) => {
    return(
        <View>
            <DateTimePickerModal
            isVisible={isDateTimeVisible}
            mode='datetime'
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            />
        </View>
    )
}
export default DateTimePicker