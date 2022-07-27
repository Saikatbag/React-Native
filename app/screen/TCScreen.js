import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios'; 
import Logo from '../components/Logo';
import { BASE_URL } from '../baseurl/BaseUrl';
import TCcard from '../components/TCcard';
import { FlatList } from 'react-native-gesture-handler';


function TCScreen({navigation,tc}) {
    const [contents, setContents] = useState("");
    useEffect(() => {
       const url = BASE_URL;
            axios
            .get(url+`/Mobile/termsandcondition`)
            .then((response) => {
                // var type = response.data[0].id;
                // var message = response.data[0].contents;
               
                if (response) {
                    setContents(response.data);
                }
                else {
                    console.log("problem db ")
                }
            })
            .catch((err) => {
                console.log(err);
            })
    
       
      }, []);

      const ItemView = ({ item }) => {
        return ( 
            <TCcard
        id={item.id}
        question={item.title}
        answer={item.contents}
        />
        );
      };


    return (
        <View style = {styles.mainContenar}>
            <View style={styles.logo}>
                     <Logo/>
            </View>

            <View style={styles.textView}>
            <FlatList
                data={contents}
                keyExtractor={(item, index) => index.toString()}
                //  ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                
                />
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
export default TCScreen;