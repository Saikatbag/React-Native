import React,{useContext, useState} from 'react';
import { View, Text, ToastAndroid, StyleSheet, Image} from 'react-native';
import Button from '../components/Button';
import TextInputBox from '../components/TextInputBox';
import colors from '../styles/colors';
import Logo from '../components/Logo';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthContext from '../auth/contex';
import { BASE_URL } from '../baseurl/BaseUrl';

import * as SecureStore from 'expo-secure-store'
async function save(key, value) {
    console.log("This is Key"+key)
    console.log("This is valu"+value)
    await SecureStore.setItemAsync(key, value);
  }
  
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      alert( result);
    } else {
      alert('No values stored under that key.');
    }
  }


function emailPass (req,{ navigation }){
    const url = BASE_URL;
    axios
    .post(url+`/Mobile/login`,req)
    .then((response) => {
        //console.log(response)
        var type=response.data.type;
        var message = response.data.message;
        console.log("response Data-----------------"+ JSON.stringify( response.data))
        console.log("response User_Data-----------------"+ JSON.stringify( response.data.user_data.id))

        if (type == 'success'){
            console.log(message);
            navigation.navigate('Profile');
            // let email = JSON.parse(req).email;
            // let password= JSON.parse(req).password;
            console.log( JSON.stringify(response.data.user_data) )
            save("userDetils",JSON.stringify(response.data.user_data));
            save("userId",JSON.stringify(response.data.user_data.id));
            // save("pass",password);
        }
        else{
            alert("Wrong email or password")
            Toast.show({type:message})
        }
    })
    .catch((err) => {
        console.log(err);
    })
    
};


function passwordChack(email,password,{navigation}){
    
    if (email == "saikat" && password == "123456"){
        navigation.navigate('Profile');
        const user = {email:'saikat',password:'123456'}
        
        
    }
    if (email ==""&& password ==""){
        alert("Enter email password ")
    }
    else{
        console.log(email)
        console.log(password)
        let req = JSON.stringify({
            "email" : email,
            "password" : password,
        })
    
        emailPass(req,{navigation})
    
        
        
        // if (out[1] == "success"){
            //     ToastAndroid.show(message)
            // }
            // else{
                //     ToastAndroid.show(message)
                // }
                
            }
            // var ch = email == "saikat" && password == "123"?console.log ("login"):console.log('wrong user and password')
        }
        function SignIn({navigation}) {
            const [email, setEmail]= useState("")
            const [password, setPassword]= useState("")
            return (
                <View style={styles.contenar}>
            <View style={styles.subcontenar}>

            <Logo/>
            <View style={styles.errView}>
               {/* {mess? <Text style={styles.errtext}>Wrong email and password</Text>:<Text></Text>} */}
            </View>
            <View style={styles.signContenar}>
            <TextInputBox 
            name='Email'
            onChangeText={text => setEmail(text)}
            />
            <TextInputBox 
            name='Password'
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            />
            <Button name='SIGN IN' onPress={() => passwordChack(email,password,{navigation})} />
            <View style={styles.forgot}>
            {/* <Text> </Text> */}
            <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            >
            <Text style={styles.textPrimary}>Forgot Password ? Click Here </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.register}>
    
            <Text> Don't have an account ?</Text>
            <TouchableOpacity
            onPress={()=> navigation.navigate('SingUp')}
            >
            <Text style={styles.textPrimary}> Register Now </Text>
            </TouchableOpacity>
            </View>

            </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contenar:{
        flex:1,
        // width:'90%',
        justifyContent:'center',
        alignItems:'center'
    },
    errView:{
        height:20,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    errtext:{
        color:'#ff0000'
    },
    subcontenar:{
        flex:1,
        width:'100%',
        padding:10
    },
    icon:{
        borderWidth:2,
        
    },
    forgot:{
        flexDirection:'row',
        paddingTop:10,
    },
    register:{
        flexDirection:'row',
        paddingTop:'40%',
    },
    textPrimary:{
        color:colors.primary,
        fontWeight:'bold',
        
    },
    signContenar:{
        flex:1,
        width:'100%',
        // justifyContent:'center',
        alignItems:'center'
    },
    
})
export default SignIn;