import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container:{
        marginBottom:10,
        padding:5,
        borderTopRightRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:colors.orange
    },
    todotext:{
        fontSize:16,
        fontStyle:'italic',
        fontWeight:'500',
        
        
    },
    iconview:{
        flexDirection:'row',
        width:60,
        justifyContent:'space-between',
        marginRight:5
    },
    text_view:{
        width:230,
    },
    index_text:{
        fontSize:16,
        fontWeight:'bold',
        color:'white'
    },
    index_container:{
        backgroundColor:colors.orange,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        padding:2,
        width:30,
        height:30,
        borderRadius:20
    }
})