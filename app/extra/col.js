// #44252d
// #411015-----background Color
// #40130f
// #bf5e2a
//#9d9d9b------grey

const { default: NativeStatusBarManager } = require("react-native/Libraries/Components/StatusBar/NativeStatusBarManagerAndroid");

style= {
    //-------------Background---------------
    backgroundColor:'dodgerblue',
    broderWidth:10,
    broderColor:"royalblue",
    broderRadius:10,
    broderTopLeftRadius:50,
    //---------------Shaswos---------------
    elevetion:20, //for android 
    //Iso
    shadowcolor:"grey",
    shadowOffset:{with:0, height:10,},
    shadowOpacity:1,
    shadowRadius:10,
    //_________Margin________________
    margin: 20,
    marginTop:30,
    //-----------Pading---------
    pading:30,
    padingTop:40,
    //--------Text Styles-----------
    fontFamaly:"Rpboto",
    fontStyle:"italic",
    color:"white",
    TextDecorationLine:'under-line',
    lineHight:30,
    //-------------icon---------------
    import {MeterialCommunityIcon} from '@expo/vector-icon';
    <MeterialCommunityIcon name ="email" size={200} color="dodgerblue"/>
    //------button-----------
    import React from "react";
    import {TouchableOpacity,StyleSheet,Text} from "react-native"
    function Button({title, onPress}){
        return(
            <TouchableOpacity style={styles.button}>
                <Text state={style.text}>{title} onPress={onPress}</Text>
            </TouchableOpacity>
        )

    }
    const style = StyleSheet.creat({
        button :
        {
            backgroundColor:'black',
            broder:25,
            elevetion:20,
            justifyContent:'center',
            alignItem:'center',
            pading:15,
            with:'100%'
        },
        text:{
            color:'white',
            fontSize:18,
            textTransform:'uppercase',
            fontWeight:'bold',
        }
    })

//-----------------------card-----------------------------------
import React from "react";
import {View }Fromimport { Card } from "react-native-paper";
 "react-native";
export default function App(){
    return(
        <View style={style.con}>
        <Card
        title="Master Of the class",
        subTitle="Radhe radhe ",
        image={require("./app"},
        />

        
        </View>
    );
}
//------^^^^continu as card.js ^^^^^^--------------------
import React from 'react';
import {View, StyleSheet} from "react-native";

function Card({title, subTitle, image}) {
    return (
        <View state={styles.card}>
            <Image source={require(image)}/>
            <View style={styles.detailsContainer}>

            <Text>{title}</Text>
            <Text>{subTitle}</Text>

            </View>

        </View>
    );

}
const styles = StyleSheet.create({
    card:{
       broderRadius:15,
       backgroundColor:'#fff',
       marginBottom:20, 
        overflow: "hidden",
    },
    detailsContainer:{
        padding: 20,
    }
    image:{
        width:"100%",

    },
    title:{
        marginBottom: 4,

    }
})


export default card;
//---------------------------------------------------------------


//----------------------------------------------------------------
//--------------FlatList------------------------------------------
//============
tabBarOption={{
    activeBackgroundColor:'black'
    activeTintColor:'white',
    inactivebackground:

}}
options={{
    tabBarIcon:()=> <></>
}}
//----------------------------------
import *as React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
const Tab =createBottomTabNavigator();

function CustomerScreen({cname}) {
    return (
        <View style={styles.contener}>
            <View style={styles.namecontent}>
            <Text style={styles.textStyle}>{cname}</Text>
            </View>
            <View style={styles.buttonCon}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textStyle}>Formulas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textStyle}>Details</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    buttonCon:{
        height:"8%",
        width:'100%',
        flexDirection:"row",
        backgroundColor:'grey',
        justifyContent:"space-around",
        alignItems:'center',
    },
    button:{
        height:"75%",
        width:"45%",
        alignItems:"center",
        backgroundColor:'black',
        justifyContent:'center',
        borderRadius:15,
    },
    
    contener:{
        flex:1,
        alignItems:'center',
    },
    namecontent:{
        width:'100%',
        backgroundColor:'grey',
        alignItems:'center',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    textStyle:{
        color:"white"
    }
})
export default CustomerScreen;
//-----------------------------------------------------
const result_camera=await Permission.askAsync(Permission.CAMERA_ROLL,Permission.LOCATION);