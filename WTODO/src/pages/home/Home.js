import React from 'react'
import {View,Text,Button} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View>
            <Text>Home Page</Text>
            <Button title='goBack' onPress={()=> navigation.navigate('WelcomePage')} />
        </View>
    )
}
export default Home