import * as React from 'react';
import { Text } from 'react-native';
import { Message } from '../../types';
import { View } from '../Themed';
import moment from 'moment';
import styles from './styles';

export type ChatMessageProps={
    message: Message;
     
}


const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;
    console.log(message)
    return(
        <View style={styles.container}>
            <View style={styles.messageBox}>
                <Text>{ message.user.name }</Text>
                <Text>{ message.content }</Text>
                <Text>{ moment(message.createdAt).fromNow() }</Text>
            </View>
        </View>
       
    )
}; export default ChatMessage;