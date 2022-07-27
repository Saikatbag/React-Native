import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import colors from '../styles/colors';

function Button({name,onPress,style,disabled}) {
    return (
        <TouchableOpacity 
        onPress={onPress} 
        disabled={disabled}
        style={[styles.button,{style}]}>
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
      backgroundColor:colors.primary,
      justifyContent:'center',
      alignItems:'center',
      height:40,
      width:'100%'
  
    },
    text:{
      color:colors.secondary,
      fontSize:20,
      fontWeight:'bold'
    }
  })
  
export default Button;