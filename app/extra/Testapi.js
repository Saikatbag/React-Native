// import React, { useEffect,useState } from 'react';
// import { Alert, Button, FlatList, View,Text, StyleSheet} from 'react-native';
// // import listingsApi from '../api/listings'
// import axios from 'axios';


// //   const [listings, setListings]=useState([]);
// //   useEffect(()=>{
//     //       loadListings();
//     //   },[]);
//     //   const loadListings =async() => {
//         //       const response= await listingsApi.setListings();
//         //       setListings(response.data);
//         //   }

// function Testapi(props) {
// const [ list, setlist] = useState()

// getpost = () => {
//     axios.get('http://192.168.0.111:3000/api/users/list')
//     .then((response) => {
//         const data =response.data;
//         console.log(data[0])
//         setlist(data[0].email)
//     })
//     .catch(() => {
//         alert('Error')
//     })
// }


  
//     return (
//         <View>
// <Text>{list}</Text>
//             <Button
//         title="Press me"
//         color="#f194ff"
//         onPress={getpost}
//       />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
    
// })
// export default Testapi;
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
let req = JSON.stringify({
  "email" : "sarit@gmail.com",
  "password" : "123456",
})
// http://192.168.0.103:8080/colorcard/mobile_c/login,http://192.168.0.111:3000/api/users/list ,http://192.168.0.103:8080/belldeliveries/deriver/getOrders
export default function Testapi() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .post(`http://192.168.0.103/colorcard/mobile_c/login`,req)
      .then((response) => {
        let data = [];
        console.log(response.data);
        response.data.map((repo) => {
          let rep = {
            id: repo?.id,
            price: repo?.price,
            status: repo?.status,
            url: repo?.pickup_time,
          };
          data.push(rep);
        });
        // console.log(data);
        setRepos(data);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(repos);
  }, [repos]);



  return (
    <SafeAreaView style={styles.container}>

    
      <FlatList
        data={repos}
        renderItem={({item}) => (
            <View style={styles.list}>
            <Text>{item?.price}</Text>
            <Text>{item?.status}</Text>
            <Text>{item?.url}</Text>
          </View>
        )}
        />
    
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'90%',
    backgroundColor: 'rgba(21,21,21,0.1)',
  },
  list: {
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
});