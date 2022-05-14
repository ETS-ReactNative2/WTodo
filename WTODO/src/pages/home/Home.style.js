import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    addtaskbutton: {
        position: 'absolute',
        bottom: 40,
        right: 20,
        backgroundColor: colors.orange,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    list_container: {
        padding:10,
        flex:1
    }
})