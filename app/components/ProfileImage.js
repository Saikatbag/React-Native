import React from 'react';
import{View,Text,Image, StyleSheet} from 'react-native'
import colors from '../styles/colors';

function ProfileImage({name,image,style}) {
    return (
       <View style={[styles.contenar,style]}>

           <View style={[styles.imageContenar]}>
           <Image style={[styles.image]} source={require("../assets/saikat.jpeg")} />
           </View>
            <Text style={styles.text}>{name} </Text>
       </View>
    );
}
const styles = StyleSheet.create({
    contenar:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:colors.primary
    },image:{
        height:150,
        width:150,
    },
    imageContenar:{
        height:150,
        width:150,
        justifyContent:'center',
        borderRadius:75,
        overflow:'hidden',
        borderColor:colors.primaryLight,
        borderWidth:4,
    },
    text:{
        color:colors.secondary,
        fontSize:20,

    }

})
export default ProfileImage;