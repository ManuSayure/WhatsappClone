import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',        
        padding:10,
    },
    leftContainer:{
        flexDirection:'row',
    },
    midContainer:{
        marginLeft:0,
        justifyContent: 'space-between',       

    },
    username:{
        fontWeight: 'bold',
        fontSize: 16 ,
    },
    avatar:{
        width: 60, 
        height: 60,
        marginRight: 15,
        borderRadius: 50,
    },
    status:{
        fontSize:16,
        color: 'grey', 
    
    },

}); export default styles;