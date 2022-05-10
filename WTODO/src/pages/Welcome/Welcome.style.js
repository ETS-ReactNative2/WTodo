import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    lottie_view:{
        width:200,
        height:200,
       
    },
    header_text:{
        fontSize:30,
        color:'black',
        marginBottom:5,
        fontFamily:'RobotoCondensed-Bold'
    },

    description_text:{
        fontSize:18,
        color:colors.navyblue,
        fontFamily:'Tapestry-Regular'
       
    },
    privacy_container:{
        marginTop:120,
        alignItems:'center',
        marginBottom:10
    },
    privacy_container2:{
        flexDirection:'row'
    },
    privacy_text:{
        fontSize:12,
        color:'red',
        textDecorationLine:'underline'
    },
    andtext:{
        fontSize:12
    },
    withthistext:{
        marginTop:30,
        position:'absolute',
        bottom:80
    },
    lineview:{
        height:1,
        width:'100%',
        borderWidth:0.2,
        position:'absolute',
        bottom:70
    },
    google_image:{
        width:36,
        height:36,
        
    },
    google_container:{
        borderWidth:1,
        borderRadius:30,
        padding:5,
        borderColor:'#4285F4',
        marginRight:10
        
    },
    auth_container:{
        position:'absolute',
        bottom:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    email_container:{
        borderWidth:1,
        borderRadius:30,
        padding:5,
        borderColor:'black',
        marginLeft:10,

    },
    bootsplash: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      },
      logo: {
        height: 89,
        width: 100,
      },
})