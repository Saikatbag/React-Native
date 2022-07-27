import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../components/Button';
import TextInputBox from '../components/TextInputBox';
import colors from '../styles/colors';
import Logo from '../components/Logo'
function ForgotPasswordScreen(props) {
    return (
        <View style={styles.contenar}>
            <Logo/>

            <View style={styles.signContenar}>
                <View style={styles.textview}>
                <Text>Enter your registration email below to resive password reset instructions</Text>
                </View>

            <TextInputBox name='Enter Your Registered Mail'/>
            <Button name='RESET'/>
            <View style={styles.forgot}>
           
            </View>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contenar:{
        flex:1,
        // width:'90%',
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        height:200,
        width:200,
        
    },
  
    textPrimary:{
        color:colors.primary,
        fontWeight:'bold'
    },
    signContenar:{
        flex:1,
        width:'100%',
        // justifyContent:'center',
        alignItems:'center'
    },
    textview:{
        textAlign:'justify',
        paddingBottom:20,
        
    }
    
})
export default ForgotPasswordScreen;