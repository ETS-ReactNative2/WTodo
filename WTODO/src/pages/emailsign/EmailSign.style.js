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
    
    signinbutton:{
        backgroundColor:'#ff7b25',
        alignItems:'center',
        borderRadius:8,
        justifyContent:'center',
        paddingVertical:12,
        width:'90%',
        elevation:8
    },
    buttontext:{
        color:'white',
        fontSize:20,
        fontFamily:'RobotoCondensed-Italic'
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
        marginTop:80
        
    },
    goLogin:{
        flexDirection:'row',
        marginTop:80
    },
    logintext:{
        color:colors.navyblue,
        marginLeft:5,
        fontWeight:'bold',
        textDecorationLine:'underline'
    }
})