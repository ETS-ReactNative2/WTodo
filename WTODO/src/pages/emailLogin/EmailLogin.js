import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator,KeyboardAvoidingView } from 'react-native';
import styles from './EmailLogin.style'
import { Formik } from 'formik'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import colors from '../../assets/colors/colors';
import auth from '@react-native-firebase/auth'
import CheckLottie from '../../components/checkLottie/CheckLottie';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Input from '../../components/input/Input';
import LoginButton from '../../components/LoginButton/LoginButton';
import ForgetPassword from '../forgetPassword/ForgetPassword';
import {showMessage} from 'react-native-flash-message'



const initialFormValues = {
    email: '',
    name: '',
    password: '',
}

const EmailLogin = ({ navigation }) => {
    const [loading,setLoading] = React.useState(false)
    const goBack = () => {
        navigation.goBack();
    }
    const handleFormSubmit = async (formValues) => {
      
            try {
                setLoading(true)
                if (formValues.email||formValues.password != '') {
                    await auth().signInWithEmailAndPassword(formValues.email, formValues.password)
                    setLoading(false)
                    navigation.navigate('HomePage')
                } else{
                    showMessage({
                        message:'Email or password cannot be empty',
                        type:'danger'
                    })
                    setLoading(false)
                }
              
            } catch (error) {
                setLoading(true)
                console.log(error)
                setLoading(false)
            }
        }
    return (
        <View style={styles.container} >
            <FontAwesome5 name='times' color={'gray'} size={20} style={styles.icon} onPress={goBack} />
            <View style={styles.emailview} >
            <CheckLottie/>
            </View>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input placeHolder='enter your email' onChangeText={handleChange('email')} iconName='email' />
                        <Input placeHolder='enter your password' onChangeText={handleChange('password')} iconName='key' />
                        <TouchableOpacity onPress={()=> navigation.navigate('ForgetPasswordPage')} >
                        <Text style={styles.forgotpasswordtext} >Forgot your password?</Text>
                        </TouchableOpacity>
                        <LoginButton buttontext='LOGIN WITH E-MAIL' onPress={handleSubmit} loading={loading} theme='primary' />
                        <LoginButton buttontext='GO BACK' onPress={()=> navigation.goBack()} loading={loading} theme='secondary' />
                    </>
                )}

            </Formik>

        </View>
    )
}
export default EmailLogin