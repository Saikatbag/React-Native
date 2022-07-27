import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import TextInputBox from '../components/TextInputBox';

function EditProfileScreen({navigation,route}) {
    const user = route.params;
    return (
        <View style={styles.contenar}>
            <TextInputBox name={user.name}/>
            <TextInputBox name={user.email}/>
            <TextInputBox name={user.phone}/>
            <TextInputBox name={user.address}/>
            <View style={styles.buttoncon}>
                <View style={styles.b1}>
                <Button name = 'SAVE'/>
                </View>
                <View style= {styles.b1}>
                <Button name = "BACK"
                onPress={() => navigation.goBack()}
                />
                </View>
            </View>
        </View>
       
    );
}
const styles = StyleSheet.create({
    contenar:{
        padding:10,
        paddingTop:20
    },
    b1:{
        width:'40%'
    },
    buttoncon:{
        padding:5,
        justifyContent:'space-around',
        flexDirection:'row',

    }
    
})
export default EditProfileScreen;