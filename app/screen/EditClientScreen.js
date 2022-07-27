import React from 'react';
import { View, TextInput, StyleSheet, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../components/Button';
import TextInputBox from '../components/TextInputBox';
import colors from '../styles/colors';
import Logo from '../components/Logo'
import TextInputArea from '../components/TextInputArea';
function EditClientScreen(props) {
    return (
        <View style={styles.contenar}>
            <TextInputBox name='Name'/>
            <TextInputBox name='Phone'/>
            <TextInputBox name='Email'/>
            <TextInputBox name='Address'/>
           <TextInputArea name='Note'/>
            <Button name='EDIT CLIENT' />
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
export default EditClientScreen;