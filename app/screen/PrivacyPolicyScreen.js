import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios'; 
import Logo from '../components/Logo';
import { BASE_URL } from '../baseurl/BaseUrl';


function PrivacyPolicyScreen(props) {
    const [contents, setContents] = useState("");
    useEffect(() => {
        const url = BASE_URL;
            axios
            .get(url+`/Mobile/privacypolicy`)
            .then((response) => {
                var type = response.data[0].id;
                var message = response.data[0].contents;
                if (response) {
                    console.log(message);
                    setContents(message)
                    
                }
                else {
                    console.log("problem db ")
                }
            })
            .catch((err) => {
                console.log(err);
            })
    
       
      }, []);




    return (
        <View style = {styles.mainContenar}>
            <View style={styles.logo}>
                     <Logo/>
            </View>

            <View style={styles.textView}>
                <Text> {contents} </Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    mainContenar:{
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        // backgroundColor:'grey'
    },
    logo:{
        flex:.3,
    },
    textView:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'grey'
    }
})
export default PrivacyPolicyScreen;