import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import colors from '../styles/colors';
import { AntDesign } from '@expo/vector-icons';

function TextView({name,icon}) {
    return (
        <View style={styles.contenar}>
            <View style={styles.icon}>
            <AntDesign name={icon} size={24} color={colors.primary} />
            </View>
            
            <View style={styles.textcontenar}>
            <Text style = {styles.text}>{name}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contenar:{ 
        flexDirection:"row",
        alignItems:'center'
    },
    icon:{
        paddingRight:7,
    },
    textcontenar:{
        width:'80%',
        paddingBottom:3,
        marginBottom:5,
        borderBottomWidth:.5,
        borderColor:colors.secondaryLight,
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:colors.primary,
    }
})
export default TextView;