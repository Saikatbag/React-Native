import React, {useState} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../components/Button';
import TextInputBox from '../components/TextInputBox';
import colors from '../styles/colors';
import Logo from '../components/Logo'
import TextInputArea from '../components/TextInputArea';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BASE_URL } from '../baseurl/BaseUrl';
import axios from 'axios';

function feedback (email,message,{ navigation }){
    const url = BASE_URL;
    let req = {
        
        "name":email,
        "price":"45",
        "note":message
    }
    axios
    .post(url+`/Mobile/feedback`,req)
    .then((response) => {
        var type=response.data.type;
        var message = response.data.message;
        console.log(response.data)
        if (type == 'success'){
            alert("FeedBack message send")
            navigation.goBack();
            
        }
        else{
            alert("Wrong ")
            
        }
    })
    .catch((err) => {
        console.log(err);
    })
    
};


function FeedbackScreen({navigation}) {
    const [email, setEmail]= useState("")
    const [message, setMessage]= useState("")
    return (
        <View style={styles.mainContenar}>
        <View style={styles.contenar}>
            <TextInputBox name='Enter your Email'
             onChangeText={text => setEmail(text)}
             />
            <TextInputArea name='Message'
             onChangeText={text => setMessage(text)}
             />
            <Button name='SEND FEEDBACK' onPress={() => feedback(email,message,{navigation})} />
        </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    mainContenar:{
        height:'100%',
        width:'100%'
    },
    contenar:{
        flex:1,
        // width:'90%',
        padding:10,
        // justifyContent:'center',
        alignItems:'center',
    },
   
    
})
export default FeedbackScreen;