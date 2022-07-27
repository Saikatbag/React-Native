import React, {useState, useEffect} from 'react';
import QACard from '../components/QACard';
import { View,StyleSheet,FlatList, ScrollView } from 'react-native';
import Button from '../components/Button';
import { BASE_URL } from '../baseurl/BaseUrl';
import axios from 'axios';

function FAQScreen({navigation}) {
    const [data, setData] = useState();
    const url = BASE_URL;
    useEffect(() => {
                 (async () => {
                               axios
                               .get(url+`/Mobile/faq`)
                               .then((response) => {
                                 const len =response.data.length;
                                 if (len>0) {
                                     setData(response.data)
                                    }
                                    else {
                                        console.log("problem db ")
                                    }
                                    
                               })
                               .catch((err) => {
                                   console.log(err);
                                })
                    })();
               }, []);



    return (
       <View style={styles.faqcontenar}>
     <FlatList
                style={styles.scrol}
                data= {data}
                keyExtractor={(item) =>item.id}
                renderItem={({item})=> 
                <QACard answer={item.answer} question={item.question}
                />}
                
       />
           <Button name ='BACK' 
           onPress={() => navigation.goBack()}
           />
        </View>
    );
}
const styles = StyleSheet.create({
    faqcontenar:{
        flex:1,
        width:'100%',
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:20,
        paddingTop:20,
    },
    button:{
        justifyContent:'flex-end'
    },
    scrol:{
        width:'100%'
    }

})
export default FAQScreen;