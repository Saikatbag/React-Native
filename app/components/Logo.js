import React from 'react';
import { View,Image,StyleSheet } from 'react-native';

function Logo({style}) {
    return (
        <View style={[styles.logoContenar]}>
        <Image style={[styles.logo,style]} source={require("../assets/logo.png")} />
        </View>
    );
}
const styles = StyleSheet.create({
    logo:{
        width:150,
        height:150,
    }, 
    logoContenar:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})
export default Logo;