import React from "react";
import Input from "../../components/input/Input";
import { View, Text } from 'react-native'
import LoginButton from "../../components/LoginButton/LoginButton";
import styles from './ForgetPassword.style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Formik } from "formik";
import auth from '@react-native-firebase/auth'
import { showMessage, hideMessage } from "react-native-flash-message";


const initialFormValues = {
    email: ''
}


const ForgetPassword = ({ navigation }) => {
    const goBack = () => {
        navigation.goBack();
    }
    const handleFormSubmit = async (formValues) => {
        try {
            if (formValues.email=='') {
                showMessage({
                    message:'Email cant be null ',
                    type:'danger'
                }) 
            } else {
            await auth().sendPasswordResetEmail(formValues.email)
            .then(()=>{
                showMessage({
                    message:'Check your email',
                    type:'success'
                });
                navigation.goBack();
            })
            }
        } catch (error) {
            showMessage({
                message:error.message,
                type:'danger'
            })
        }
    }
    return (
        <View style={styles.container} >
            <FontAwesome5 name='times' color={'gray'} size={20} style={styles.icon} onPress={goBack} />
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} >
                {({values,handleChange,handleSubmit }) => (
                    <>
                        <Input placeHolder='enter your email' iconName='email' onChangeText={handleChange('email')} />
                        <LoginButton theme='primary' buttontext='SEND EMAIL' onPress={handleSubmit} />
                    </>
                )}

            </Formik>
        </View>
    )
}
export default ForgetPassword