import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        
             
        padding:10,
    },
    center:{
      justifyContent:'space-around'

    },
    leftContainer:{
        flexDirection:'row',
    },
    midContainer:{
        marginLeft:0,
        justifyContent: 'space-between',       

    },
    avatar:{
        width: 60, 
        height: 60,
        marginRight: 15,
        borderRadius: 50,
    },
    username:{
        fontWeight: 'bold',
        fontSize: 16 ,
    },
    lastMessage:{
        fontSize:16,
        color: 'grey', 
        width: '100%',   
    },
    time:{
        fontSize:14 ,
        color: 'grey',
        position: 'absolute',
        right: 10 ,        
    },
});
export default styles;
