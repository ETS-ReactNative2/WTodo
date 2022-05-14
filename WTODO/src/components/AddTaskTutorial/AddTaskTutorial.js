import React,{useRef,useEffect} from "react";
import {View,Text,Image} from 'react-native'

import LottieView from 'lottie-react-native'
import styles from './AddTaskTutorial.style'

const AddTaskTutorial = () => {
    const ref = useRef();
    useEffect(()=>{
        if (ref.current) {
            ref.current?.play(0,80)
        }
    },[ref.current])
    return(
        <View style={styles.container} >
            <LottieView  source={require('../../assets/Resting.json')} style={styles.resting_container} />
            <Text style={[styles.text,{position:'absolute',top:220}]} >There is nothing to do</Text>
            <Text style={styles.text} >Add a task by clicking the ' + ' button</Text>
            <LottieView style={styles.lottie_container} source={require('../../assets/Arrow.json')} autoPlay loop={false} />
        </View>
    )
}
export default AddTaskTutorial