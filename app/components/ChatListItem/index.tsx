import * as React from 'react';
import { View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import { Avatar } from 'react-native-elements';
import avatar01 from '../../assets/images/avatar/avatar01.png';
import moment from 'moment';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = ( props: ChatListItemProps) => { 

    const { chatRoom } = props; 

    const navigation = useNavigation();

    const user = chatRoom.users[1];

    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name,
        });
    }
   
    

    return(
        <TouchableNativeFeedback onPress={onClick}>
            <View  style={ styles.container } key={props.index} >
            <View style={ styles.leftContainer }>
                <Image source = {avatar01} style={ styles.avatar }/> 
                           
            </View>
            
            <View style = { styles.midContainer } >               
                <Text style={styles.username}>{ user.name }</Text>
                <Text numberOfLines={2} style={styles.lastMessage}>{ chatRoom.lastMessage.content }</Text>        
            </View>  
            <Text style={styles.time}>{ moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY') }</Text> 
           
            </View>  

        </TouchableNativeFeedback>
       
       
    );

}; export default ChatListItem;