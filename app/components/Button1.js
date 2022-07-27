import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import colors from '../styles/colors';
import { AntDesign } from '@expo/vector-icons';

function Button1({name,onPress,style,disabled}) {
    return (
        <TouchableOpacity 
        onPress={onPress} 
        disabled={disabled}
        style={[styles.button,{style}]}>
          <Text style={styles.text}>{name}</Text>
          <AntDesign name="right" size={20} color={colors.primaryLight} />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
      backgroundColor:colors.cardBackground,
      borderWidth:1,
      borderColor:colors.secondaryLight,
      alignItems:'center',
      height:40,
      margin:5,
      width:'100%',
      flexDirection:'row',
       justifyContent:"space-between",
  
    },
    text:{
      color:colors.primaryLight,
      fontSize:20,
    //   fontWeight:'bold',
      paddingLeft:10,
     
    }
  })
  
export default Button1;