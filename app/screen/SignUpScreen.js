import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../components/Button';
import TextInputBox from '../components/TextInputBox';
import colors from '../styles/colors';
import Checkbox from 'expo-checkbox';
import axios from 'axios';
import Logo from '../components/Logo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BASE_URL } from '../baseurl/BaseUrl';
 
function register(req, { navigation }) {
    const url = BASE_URL;
    axios
        .post(url+`/Mobile/barber_register`, req)
        .then((response) => {
            console.log(response);
            var type = response.data.type;
            var message = response.data.message;
            if (type == 'success') {
                console.log(message);
                alert(message)
                navigation.navigate('SignIn');
            }
            else {
                Toast.show({ type: message })
            }
        })
        .catch((err) => {
            console.log(err);
        })

};




function SingUpScreen({ navigation }) {
    const [agree, setAgree] = useState(false);
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    return (
        <View style={styles.contenar}>
            <Logo />

            <View style={styles.signContenar}>
                <TextInputBox
                    name='Name'
                    onChangeText={text => setName(text)}
                />
                <TextInputBox name='Phone'
                    onChangeText={text => setPhoneNo(text)}
                />
                <TextInputBox name='Email'
                    onChangeText={text => setEmail(text)}
                />
                <TextInputBox name='Confirm Email'
                    onChangeText={text => setConfirmEmail(text)}
                />
                <TextInputBox name='Password'
                    onChangeText={text => setPassword(text)}
                />
                <TextInputBox name='Confirm Password'
                    onChangeText={text => setConfirmPassword(text)}
                />
                <View style={styles.tcContent}>
                    <Checkbox
                        style={styles.chackboxcon}
                        value={agree} onValueChange={() => setAgree(!agree)}
                        color={agree ? "#44252d" : undefined}
                    />
                    <Text> By registering your account with us you are agreeing to our
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TermsAndCondition')}
                        >
                            <Text style={styles.textPrimary}>
                                Terms & conditions </Text>
                        </TouchableOpacity>
                        and our
                        <TouchableOpacity
                            onPress={() => navigation.navigate('PrivacyPolicy')}
                        >
                            <Text style={styles.textPrimary}> Privacy Policy </Text>
                        </TouchableOpacity>
                    </Text>

                </View>

                <Button name='SIGN UP'
                    style={[styles.button, { backgroundColor: agree ? "#44252d" : 'grey', }]}
                    disabled={!agree}
                    onPress={() => {
                        if (email == confirmEmail & password == confirmPassword) {
                            register(req = JSON.stringify({
                                "name": name,
                                "phone": phoneNo,
                                "email": email,
                                "password": password,
                            }), { navigation })
                        }else{
                            alert("confirmEmail and confirmPassword not correct")
                        }
                    }
                    }
                />
                <View style={styles.forgot}>
                    <Text> Already have an account ?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.textPrimary}> Sign In </Text>
                    </TouchableOpacity>
                </View>



            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contenar: {
        flex: 1,
        // width: '90%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chackboxcon: {
        height: 15,
        width: 15,
    },

    forgot: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    tcContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'justify',
        padding: 10,

    },
    textPrimary: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    tuch: {
        paddingTop: 5,
    },
    signContenar: {
        flex: 2,
        width: '100%',
        // justifyContent:'center',
        alignItems: 'center'
    },

})
export default SingUpScreen;