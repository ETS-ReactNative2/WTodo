import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.navyblue,
        padding:5,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    header_text:{
        color:'white',
        fontSize:20,
        fontFamily:'RobotoCondensed-BoldItalic'
    },
    staricon1:{
        position:'absolute',
        top:26,
        left:30
    },
    staricon2:{
        position:'absolute',
        top:26,
        right:30
    }
})