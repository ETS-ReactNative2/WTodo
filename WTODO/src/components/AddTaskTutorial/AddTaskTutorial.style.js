import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    lottie_container:{
        width:300,
        position:'absolute',
        top:180,
        right:30
    },
    text:{
        fontSize:20,
        fontFamily:'RobotoCondensed-Italic',
        color:colors.navyblue
    },
    resting_container:{
        position:'absolute',
        top:20,
        width:220
    }
})