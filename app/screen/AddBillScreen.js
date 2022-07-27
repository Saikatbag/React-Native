import React, {useState} from 'react';
import { View, TextInput, StyleSheet,TouchableOpacity, Image} from 'react-native';
import Button from '../components/Button';
import TextInputBox from '../components/TextInputBox';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../styles/colors';
import TextInputArea from '../components/TextInputArea';
import { Entypo } from '@expo/vector-icons';
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { BASE_URL } from '../baseurl/BaseUrl';
import axios from 'axios';

function add(req, { navigation }) {
    const url = BASE_URL;
    console.log(req)
    axios
        .post(url+`/Mobile/addbill`,req )
        .then((response) => {
            var type = response.data.type;
            var message = response.data.message;
            if (type == 'success') {
                console.log(message);
                alert(message)
                navigation.goBack();
            }
            else {
                alert('Error');
            }
        })
        .catch((err) => {
            console.log(err);
        })

};


function AddBillScreen({navigation, route}) {
const [cpicture, setPicture] = useState(null);
const [date, setDate] = useState("");
const [color, setColor] = useState("")
const [price, setPrice] = useState("")
const [note, setNote] = useState("")



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
let req;
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
            <TextInputBox name='Date'
            onChangeText={text => setDate(text)}
            />
            <TextInputBox name='ColorCombination'
            onChangeText={text => setColor(text)}
            />
            <TextInputBox name='Price'
            onChangeText={text => setPrice(text)}
            />
           <TextInputArea name='Note'
           onChangeText={text => setNote(text)}
           />
            <Button name='ADD BILL'
            onPress={() =>  add(req= JSON.stringify({
                "id": route.params.id,
                "name":route.params.name,
                "formula": color,
                "price": price,
                "note": note,
            }), { navigation })}
            />
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
export default AddBillScreen;