import React, {useState} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Button from '../components/Button';
import TextInputBox from '../components/TextInputBox';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../styles/colors';
import { Entypo } from '@expo/vector-icons';
import TextInputArea from '../components/TextInputArea';

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";


function EditBillScreen({navigation, route}) {
    const [cpicture, setPicture] = useState(null);
    const  picFromCamera= async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
        if (granted){
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1]
            })
            
            if (!data.cancelled) {
                setPicture(data.uri);
              }
        }
        else{
            console.log("Error");
        }
    } 
    
    
    const  picFromGallery= async () => {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1]
            })
            
            if (!data.cancelled) {
                setPicture(data.uri);
              }
        }
        else{
            console.log("Error");
        }
    } 

const valu = route.params;
    return (
        <View style={styles.contenar}>
              <View style={styles.camera}>
              <TouchableOpacity
                onPress={() =>{picFromCamera()}}
                >
                    <FontAwesome5 name="camera" size={30} color={colors.primary}/>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() =>{picFromGallery()}}
                >
                    <Entypo name="image-inverted" size={35} color={colors.primary} />
                    {/* <FontAwesome5 name="camera" size={30} color={colors.primary}/> */}
                </TouchableOpacity>

            </View>
            <TextInputBox value={valu.date}/>
            <TextInputBox value={valu.color}/>
            <TextInputBox value={valu.price}/>
           <TextInputArea value={valu.note}/>
            <Button name='EDIT BILL' />
            {cpicture && <Image source={{ uri: cpicture }} style={styles.image} />}
        </View>
    );
}
const styles = StyleSheet.create({
    contenar:{
        flex:1,
        // width:'90%',
        padding:10,
        // justifyContent:'center',
        alignItems:'center'
    },
    camera:{
        flexDirection:'row',
        width:'100%',
        height:40,
        justifyContent:'space-between'
    },
    image:{
        width:200,
        height:200,
        marginTop:20,
        borderRadius:10,
        borderWidth:2,
        borderColor:colors.secondaryLight
        
    }
    
    
})
export default EditBillScreen;