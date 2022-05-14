import { Dimensions, StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:Dimensions.get('screen').height/4,
        borderRadius:8,
        padding:10,
        backgroundColor:colors.orange
    },
    modal:{
        justifyContent:'flex-end'
    },
    input:{
       color:'white'
    },
    input_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:'white',
        alignItems:'center',
        paddingHorizontal:10,
        borderRadius:8
        
    },
    calendar_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'white'

    },
    calendartext:{
        color:'#EAEDF1'
    },
    addtaskbutton:{
        backgroundColor:'white',
        alignItems:'center',
        marginTop:20,
        padding:4,
        borderRadius:8
    },
    buttontext:{
        color:colors.orange,
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'RobotoCondensed-Italic'
    }
})