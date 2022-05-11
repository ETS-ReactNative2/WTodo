import { StyleSheet } from "react-native";

const base_style= StyleSheet.create({
    container:{ 
       
        alignItems:'center',
        borderRadius:8,
        justifyContent:'center',
        paddingVertical:12,
        width:'90%',
        elevation:8
        },
        text:{
           
            fontSize:16,
            fontFamily:'RobotoCondensed-Italic',
            fontWeight:'bold'
        }
})

export default {
    primary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:'#ff7b25',
            marginTop:10
        },
        text:{
            ...base_style.text,
            color:'white',
        }
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:'white',
            marginTop:10
        },
        text:{
            ...base_style.text,
            color:'#ff7b25'
        }
    })
}