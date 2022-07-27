import React from 'react';
import { View,StyleSheet,TouchableOpacity, Image, Text } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../styles/colors';

function ContactImgNoComponent({phone, name, id, onPress}) {
    return (
        <TouchableOpacity 
        style={styles.touch}
        onPress={onPress}
        >
            <View style={styles.contenar}>
            <View style={styles.imageContenar}>
                <Image style={styles.image} source={require("../assets/saikat.png")}/>
            </View>
            <View style={styles.textcontenar}>
            <Text style={styles.text1}>
             {name}
            </Text>
            <Text>
                {phone}
            </Text>
            </View>
        </View>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contenar:{
        width:'100%',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.cardBackground,
        borderBottomColor:colors.secondaryLight,
        borderBottomWidth:0.5,
        marginBottom:5,
        padding:2,
        borderRadius:5,
        overflow:'hidden'
    
    },
 
    imageContenar:{
        height:50,
        width:50,
        borderRadius:25,
        overflow:'hidden',
        marginLeft:20

    },
    image:{
        height:50,
        width:50,
        borderRadius:25,
        overflow:'hidden'
    },
    textcontenar:{
        marginLeft:20,
    },
    touch:{
        width:'100%',
        paddingLeft:10,
        paddingRight:10,
        
    },
    text1:{
        fontSize:25,
    }
    
})
export default ContactImgNoComponent;