import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:colors.orange,
        marginBottom:10,
        padding:5,
        borderTopRightRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    todotext:{
        fontSize:16,
        fontWeight:'bold',
        
    },
    iconview:{
        flexDirection:'row',
        width:60,
        justifyContent:'space-between',
        marginRight:5
    },
    text_view:{
        width:250,
    }
})