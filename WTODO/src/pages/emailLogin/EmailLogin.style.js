import { StyleSheet,Dimensions } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        paddingVertical:20,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        marginBottom:20,
        position:'absolute',
        top:20,
        left:20
    },
    emailview:{
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        alignItems:'center',
        marginBottom:40,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:20
        
    },
    forgotpasswordtext:{
        textDecorationLine:'underline',
        color:colors.navyblue,
        marginBottom:2,
        marginTop:2
    }
    
})