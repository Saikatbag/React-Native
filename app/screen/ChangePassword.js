import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import TextInputBox from '../components/TextInputBox';

function ChangePassword({navigation}) {
    return (
        <View style={styles.contenar}>
            <TextInputBox name='Current Password'/>
            <TextInputBox name='New Password'/>
            <TextInputBox name='Confirm Password'/>
            <View style={styles.buttoncon}>
                <View style={styles.b1}>
                <Button name = 'SAVE'/>
                </View>
                <View style= {styles.b1}>
                <Button name = "BACK"
                onPress={() => navigation.goBack()}
                />
                </View>
            </View>
            <View style = {styles.button1}>
            <Button name='FORGOT PASSWORD'
            onPress={() => navigation.navigate('ForgotPassword')}
            />
            </View>
        </View>
       
    );
}
const styles = StyleSheet.create({
    contenar:{
        padding:10,
        paddingTop:20,
        
    },
    b1:{
        width:'40%'
    },
    button1:{
        width:'100%',
        marginTop:50,
    },
    buttoncon:{
        padding:5,
        justifyContent:'space-around',
        flexDirection:'row',

    }
    
})
export default ChangePassword;