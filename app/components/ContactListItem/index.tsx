import * as React from 'react';
import { View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import { User } from '../../types';
import styles from './styles';
import { Avatar } from 'react-native-elements';
import avatar01 from '../../assets/images/avatar/avatar01.png';
import moment from 'moment';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export type ContactListItemProps = {
    user: User;
}

const ContactListItem = ( props: ContactListItemProps) => { 

    const { user } = props; 

    const navigation = useNavigation();

    const onClick = () => {
       //navigate to chat room with this user
    }
   
    

    return(
        <TouchableNativeFeedback onPress={onClick}>
            <View  style={ styles.container } key={props.index} >
                <View style={ styles.leftContainer }>
                    <Image source = {avatar01} style={ styles.avatar }/> 
                            
                </View>
                
                <View style = { styles.midContainer } >               
                    <Text style={styles.username}>{ user.name }</Text>
                    {
                       user.status ?
                            <Text  numberOfLines={2} style={styles.status}>{ user.status }</Text>
                        :null
                    }
                   
                        
                </View>  
           
           
            </View>  

        </TouchableNativeFeedback>
       
       
    );

}; export default ContactListItem;