
import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import colors from '../styles/colors';

function TextInputArea({name,...otherProps}) {
   
        return (
            <View style={[styles.textInput]}>
                <View style={styles.in}>
    
            <TextInput
                        multiline
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
        height:"25%",
        width:'100%',
        justifyContent:'flex-start',
        borderWidth:1,
        borderColor:colors.primary,
        // paddingRight:5,
        marginBottom:10,
    },
    in:{
        flex:1,
        paddingRight:5,
        marginLeft:5,
        // backgroundColor:'black'
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    inputStyle:{
        // flex:1,
        width:"100%",
        // height:'100%'
        // textAlign:'auto'

    }
})
export default TextInputArea;
