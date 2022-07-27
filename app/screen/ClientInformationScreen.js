import React,{ useState, useEffect } from 'react';
import { View, Text,FlatList, StyleSheet } from 'react-native';
import { BASE_URL } from '../baseurl/BaseUrl';
import AddIcon from '../components/AddIcon';
import ImageCard from '../components/ImageCard';
import axios from 'axios';
// const valu = [
//     {
//         id:'1',
//         date:"24/11/2022",
//         color:'black 23 gren bhoao  56 read 30',
//         price:'36$',
//         note:"Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.",
//     },
//     {
//         id:'2',
//         date:"24/11/2022",
//         color:'black 23  oeyhduj gren 56 read 30',
//         price:'36$',
//         note:"Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.",
//     },
//     {
//         id:'3',
//         date:"24/11/2022",
//         color:'black 23 gren 56 read 30',
//         price:'36$',
//         note:"Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.",
//     },
//     {
//         id:'4',
//         date:"24/11/2022",
//         color:'black 23 gren hyfhu 56 read 30',
//         price:'36$',
//         note:"Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.",
//     },
//     {
//         id:'5',
//         date:"24/11/2022",
//         color:'black 23 gren 56 read 30',
//         price:'36$',
//         note:"Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.",
//     },
//     {
//         id:'6',
//         date:"24/11/2022",
//         color:'black 23 gren 56 read 30',
//         price:'36$',
//         note:"Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.",
//     },
    
// ]
function ClientInformationScreen({navigation, route}) {
    const[valu ,setValu] = useState();
 let  req = 
     "client_id"+route.params.id
    //  {
    //  name:route.params.name,
    // } 
            
    const url = BASE_URL;
    useEffect(() => {
                 (async () => {
                               axios
                               .get(url+`/Mobile/getclientbookingbyid`)
                               .then((response) => {
                                 const len =response.data.length;
                                 console.log(response.data)
                                   if (len>0) {
                                    setValu(response.data)
                                    //    arr.sort((a, b) => (a.name > b.name) ? 1 : -1);
                                    
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
        <View style={styles.contenar}>
            {/* <Text>{route.params.name}</Text>
            <Text>{route.params.id}</Text> */}
            <AddIcon 
            style={styles.addIcon}
            onPress={() => navigation.navigate('AddBill',
                { name:route.params.name,
                id:route.params.id})}
            />
           <FlatList
                style={styles.flat}
                data= {valu}
                keyExtractor={(item) =>item.id}
                renderItem={({item})=> 
                <ImageCard date={item.date} price={item.price} color={item.color}
                onPressImage={() => navigation.navigate("EditBill",{date:item.date, color:item.color, price:item.price,name:route.params.name,
                    id:route.params.id, note:item.note})}
                onPress={() => navigation.navigate("SendMail")}
                />}
                />
        </View>
    );
}
const styles = StyleSheet.create({
    contenar:{
        flex:1,
    },
    flat:{
        
    },
    addIcon:{
        bottom:20,
        right:20,
        position:'absolute',
        zIndex:1
    }
})
export default ClientInformationScreen;