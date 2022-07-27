import React, {useState}from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View, TextInput, StyleSheet,Text} from 'react-native';
// import { TextInput } from 'react-native-paper';
import { SearchBar } from 'react-native-screens';
import colors from '../styles/colors';

function TextInputBox({name,style,...otherProps}) {
    return (
        <View style={[styles.textInput,style]}>
            <View style={styles.in}>

        <TextInput
                    placeholder={name}
                    selectionColor='#4f1b1f'
                    activeUnderlineColor='#4f1b1f'
                    style={styles.inputStyle}
                    {...otherProps}
                    
                    />
                    </View>
            </View>
    );
}
const styles = StyleSheet.create({
    textInput:{
        height:40,
        width:'100%',
        justifyContent:'flex-start',
        borderWidth:1,
        borderColor:colors.primary,
        // paddingRight:5,
        marginBottom:10,
    },
    in:{
        flex:1,
        marginLeft:5,
        paddingRight:5
    },
    inputStyle:{
        flex:1,
        width:"100%",
        alignItems:'flex-start',
        justifyContent:'center',
        // backgroundColor:'white'

    }
})
export default TextInputBox;