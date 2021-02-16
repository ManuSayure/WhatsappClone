import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import React, {useState} from 'react';
import { Text, View,  TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone');

    };
    const onSendPress = () => {
        console.warn(`Sendind: ${message}`);
        //send the message to the backend

        setMessage('')

    };

    const onPress = () => {
        if(!message){
            onMicrophonePress();
        } else{
            onSendPress();
        }

    };
    return(
        <View style={ styles.container}>
           <View style={styles.mainContainer}>
               <FontAwesome5 name='laugh-beam' size={24} color='grey'/>
               <TextInput 
               style={styles.textInput}
               multiline
               value={message}
               onChangeText={(text) => setMessage(text)}
               placeholder={'Type a message'}
               />
               <Entypo name='attachment' size={24} color='grey' styles={styles.icons}/>
               {
                   !message && <Fontisto name='camera' size={24} color='grey' style={styles.icons}/>
                  
               }           

           </View>

            <TouchableOpacity onPress={onPress}>
                 <View style={styles.buttonContainer}>
                    {
                        !message
                        ?  <MaterialCommunityIcons name='microphone' size={28} color='white' />
                        :  <MaterialIcons name='send' size={28} color='white'/>
                     }              
                 </View>
             </TouchableOpacity> 
        </View>
    )

}; export default InputBox;