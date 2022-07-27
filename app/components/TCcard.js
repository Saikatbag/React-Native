import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';

function TCcard({id,question,answer}) {
    return (
        <View style={styles.card} >
            <View style={styles.titleView}>
                <Text style={styles.title}>
                    {id}.{question}
                </Text>
            </View>
            <View style={styles.content}>
                <Text>
                    {answer}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.cardBackground,
        marginBottom:5,
        padding:5,
        borderWidth:.5,
        borderColor:colors.borderColor,
        borderRadius:5,
    },
    title:{
        fontSize:18,
        color:colors.primaryLight
    },
    content:{
        paddingLeft:18,
        paddingRight:3,
    }
})
export default TCcard;