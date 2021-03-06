import * as React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

//import { Text, View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import chatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        style={{width:'100%', height:'100%'}}
        data=  {chatRooms } 
        renderItem= { ({ item }) => <ChatListItem  chatRoom={item} /> }
        keyExtractor= { (item) => item.id }
      />  
      <NewMessageButton/>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
