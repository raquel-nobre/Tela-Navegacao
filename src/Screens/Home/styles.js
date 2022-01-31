import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%', height:'100%'
    },
    Heading:{
        fontSize:32,
        marginTop:40,
        marginLeft:15,
        fontWeight:'bold'      
    },
    TextInput:{
       color:'red',
    },   
    mainPostView:{
     margin:5
    },
    posts:{
        marginTop:10,
        padding:10, 
        borderWidth:1,
        borderColor:'red' ,
    },
    txtNews:{
        fontSize:18,
        fontWeight:'bold',
        width:360     
    },
    
});

export default styles