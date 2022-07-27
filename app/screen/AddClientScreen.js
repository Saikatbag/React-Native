import React, { useState, useEffect} from 'react';
import { View, TextInput, StyleSheet, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../components/Button';
import TextInputBox from '../components/TextInputBox';
import colors from '../styles/colors';
import Logo from '../components/Logo';
import axios from 'axios';
import TextInputArea from '../components/TextInputArea';
import { BASE_URL } from '../baseurl/BaseUrl';
import * as SecureStore from 'expo-secure-store';

function register(req, { navigation }) {
    const url = BASE_URL;
    axios
        .post(url+`/Mobile/addclient`, req)
        .then((response) => {
            var type = response.data.type;
            var message = response.data.message;
            if (type == 'success') {
                console.log(message);
                alert(message)
                navigation.navigate('Clients');
            }
            else {
                alert(message)
            }
        })
        .catch((err) => {
            console.log(err);
        })

};



function AddClientScreen({navigation}) {
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [note, setNote] = useState("")
    const [valu, setValu] = useState("")

    useEffect(() => {
        (async () => {
            let result = await SecureStore.getItemAsync("userDetils");
            if (result) {
                setValu(JSON.parse(result).id)
            } else {
                alert('No values stored under that key.');
            }
        })();
    }, []);
    
    return (
        <View style={styles.contenar}>
            <TextInputBox name='Name'
             onChangeText={text => setName(text)}
            />
            <TextInputBox name='Phone'
             onChangeText={text => setPhoneNo(text)}
            />
            <TextInputBox name='Email'
             onChangeText={text => setEmail(text)}
            />
            <TextInputBox name='Address'
             onChangeText={text => setAddress(text)}
            />
           <TextInputArea name='Note'
            onChangeText={text => setNote(text)}
           />
            <Button name='ADD CLIENT'
             onPress={() => {
                    register(req = JSON.stringify({
                        "stylish_id":valu,
                        "name": name,
                        "phone": phoneNo,
                        "email": email,
                        "address": address,
                        "note":note
                    }), { navigation })

            }
            }
            />
        </View>
    );
}
const styles = StyleSheet.create({
    contenar:{
        flex:1,
        // width:'90%',
        padding:10,
        // justifyContent:'center',
        alignItems:'center'
    },
    
    
})
export default AddClientScreen;