import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}
const ChatListItem = ( props: ChatListItemProps) => { 
    const { chatRoom } = props; 

    const user = chatRoom.users[1];

    return(
        <View style={ styles.container }>
            <View style={ styles.leftContainer } >
                <Image source={{ uri: user.imageUri }} style={ styles.avatar } />
            </View>
            <View style = { styles.midContainer } >
                <Text>{ user.name }</Text>
                <Text>{ chatRoom.lastMessage.content }</Text>
            </View>        
           
           {/*<Text>{ chatRoom.lastMessage.createdAt }</Text>*/}
            <Text>Yesterday</Text>
        </View>
    )

}; export default ChatListItem;