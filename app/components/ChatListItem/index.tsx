import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import {Avatar } from 'react-native-elements';
import avatar01 from '../../assets/images/avatar/avatar01.png';
import moment from 'moment';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = ( props: ChatListItemProps) => { 
    const { chatRoom } = props; 

    const user = chatRoom.users[1];
    

    return(
        <View style={ styles.container }>
            <View style={ styles.leftContainer }>
                <Image source = {avatar01} style={ styles.avatar }/> 
                           
            </View>
            
            <View style = { styles.midContainer } >
                <Text style={styles.username}>{ user.name }</Text>
                <Text numberOfLines={2} style={styles.lastMessage}>{ chatRoom.lastMessage.content }</Text>
            </View>        
           
           {/*<Text style={styles.time}>Yesterday</Text>*/}
            
            <Text style={styles.time}>{ moment(chatRoom.lastMessage.createdAt) }</Text>
        </View>
    )

}; export default ChatListItem;