import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import ProfileImage from './ProfileImage';
import colors from '../styles/colors';

function CustomComponent(props) {
    return (
        
        <View style={styles.mainView}>
       <DrawerContentScrollView {...props}>
           <ProfileImage name='Saikat Bag' style={styles.profile}/>
           <DrawerItemList{...props}/>
       </DrawerContentScrollView>
            <View style={styles.customContenar}>

                <TouchableOpacity style={styles.tuch}>
                <View style={styles.customButtom}>
                <Image style={[styles.icon]} source={require("../assets/icon/Rate.png")}/>
                <Text style={styles.text}>Rate App</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tuch}>
                <View style={styles.customButtom}>
                <Image style={[styles.icon]} source={require("../assets/icon/Share.png")}/>
                <Text style={styles.text}>Share app</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    customContenar:{
        borderTopWidth:1,
        borderTopColor:colors.borderColor,
        alignItems:'center',
        paddingBottom:10,
        paddingTop:10,
    },
    customButtom:{
        flexDirection:'row',
        height:40,
        width:'100%',
        alignItems:'center',
        borderRadius:5,
        marginBottom:10,
    },
    text:{
        color:colors.primary,
        paddingLeft:10,
    },
    icon: {
        height: 22,
        width: 22,
        paddingLeft:10,
        tintColor:colors.primary,
    
      },
    mainView:{
        flex:1,
    },
    profile:{
        paddingBottom:20,
        paddingTop:20,
        },
    tuch:{
        width:'90%'
    }

})
export default CustomComponent;