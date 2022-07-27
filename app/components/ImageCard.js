import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import { Feather } from '@expo/vector-icons';
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

function ImageCard({date,color,price,onPressImage,onPress}) {
    return (
        <View style={styles.contenar}>
            <View style={styles.card}>
                <View style={styles.textView}>
                    <TouchableOpacity
                    
                    onPress={onPressImage}
                    >
                <Text style={styles.t1}> {date} </Text>
                <Text style={styles.t2}> {color} </Text>
                <Text style={styles.t3}> {price} </Text>
                    </TouchableOpacity>
                </View>
                <View style= {styles.imageMailcontenar}>
                    <Image style={styles.image}/>

                    <View style = {styles.mail}>
                        <TouchableOpacity style={styles.tuch}
                        onPress={onPress}
                        >
                        <Feather name="mail" size={20} color={colors.secondary} />
                            <Text style= {styles.textE}> EMAIL </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    contenar:{
        padding:10,
        paddingTop:30,
    },
    card:{
        height:100,
        backgroundColor:colors.cardBackground,
        flexDirection:"row",
        justifyContent:'space-around',
        borderRadius:10,
        borderWidth:0.5,
        borderColor:colors.secondaryLight
    },
    imageMailcontenar:{
        flex:1,
        justifyContent:"flex-end",
    },
    mail:{
        backgroundColor:'#7c7c7c',
        marginTop:5,
        marginBottom:10,
        width:90,
        borderRadius:5
    },
    image:{
        height:90,
        width:90,
        borderRadius:5,
        backgroundColor:colors.secondaryLight,
    },
    textView:{
        // backgroundColor:'black',
        flex:2.5,
        paddingLeft:10,
        justifyContent:"space-around"
    },
    tuch:{
        flexDirection:'row',
        justifyContent:"space-around"
    },
    textE:{
        fontSize:14,
        color:colors.secondary
    },
    t1:{
        color:colors.primary,
    },
    t2:{
        color:colors.ass,
        fontSize:12,
    },
    t3:{
        color:colors.black,
        fontSize:20,
        fontWeight:'bold'
    }
    
})
export default ImageCard;