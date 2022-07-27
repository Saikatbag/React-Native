import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import { FlatList } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import ContactImgNoComponent from '../components/ContactImgNoComponent';
import AddUserIcon from '../components/AddUserIcon';
import colors from '../styles/colors';
import axios from 'axios'; 
import { BASE_URL } from '../baseurl/BaseUrl';
import * as SecureStore from 'expo-secure-store';


export default function ClientsScreen({navigation}) {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [valu, setValu] = useState("")
    // let userid = JSON.stringify(SecureStore.getItemAsync("userId"));
    // console.log("userid   :"+userid)
//GET Phon no to Contact   
              // useEffect(() => {
              //   (async () => {
              //     const { status } = await Contacts.requestPermissionsAsync();
              //     if (status === 'granted') {
              //       const { data } = await Contacts.getContactsAsync();
              //       if (data.length > 0) {
              //         const len = data.length;
                      
              //         let arr=[]
              //         for (let i=0; i<10; i++){
              //           if(data[i].phoneNumbers){
              //             let p= data[i].phoneNumbers[0].number;
              //             let n= data[i].name;
              //             let obj={name:n,phone:p}
              //             arr.push(obj);
              //           }
              //           else{
              //             console.log("")
              //           }
              //         }
              //           // console.log("arr1-------------",arr)
              //           arr.sort((a, b) => (a.name > b.name) ? 1 : -1);
              //           // console.log("arr2-------------",arr)
              //           // setItem(arr)
              //           setFilteredDataSource(arr);
              //           setMasterDataSource(arr);
              //       }
              //     }
              //   })();
              // }, []);

  // GET client Information to database
  
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      // console.log( result);
      setValu(result);
    } else {
      alert('No values stored under that key.');
    }
  }
  getValueFor("userId")

  
  
  
  const url = BASE_URL;
  //SecureStore.getItemAsync("userId")
  useEffect(() => {
    (async () => {
      axios
      .post(url+`/Mobile/client`, JSON.stringify({"stylish_id":valu}))
      .then((response) => {
        console.log(response.data)
        console.log(valu)
                                const len =response.data.length;
                                console.log(len)
                                  if (len>0) {
                                    let arr=[]
                                    for (let i=0; i<len; i++){
                                        console.log(response.data[i].id);
                                          let id= response.data[i].id;
                                          let p= response.data[i].phone;
                                          let n= response.data[i].name;
                                          let obj={name:n,phone:p,id:id}
                                          arr.push(obj);
                                      }
                                      arr.sort((a, b) => (a.name > b.name) ? 1 : -1);
                                      setFilteredDataSource(arr);
                                      setMasterDataSource(arr);
                                  }
                                  else {
                                      console.log("problem db ")
                                  }
                              })
                              .catch((err) => {
                                  console.log(err);
                               })
                   })();
                
              }, [getValueFor]);




  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
         <View style={styles.searcView}>
        <ContactImgNoComponent
    name={item.name}
    phone={item.phone}
    onPress={() => navigation.navigate('ClientInformation',{id :item.id, name : item.name})}
    />
    </View>
    );
  };
 

  return (
    
    <View style={styles.container}>
        <AddUserIcon style={styles.addIcon}
        onPress={() => navigation.navigate('AddClient')}
        />
        <View style={styles.search}>
        <SearchBar
          round
          inputStyle={styles.inputeaurch}
          inputContainerStyle={styles.inputSearchContenar}
          containerStyle={styles.searchContenar}
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
          />
          </View>
      <View style = {styles.flat}>
      <FlatList
       data={filteredDataSource}
       keyExtractor={(item, index) => index.toString()}
       //  ItemSeparatorComponent={ItemSeparatorView}
       renderItem={ItemView}
       />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flat:{
    flex:1,
    width:"100%"
  },
  container: {
    flex: 1,
    width:'100%',
    // paddingLeft:5,
    // paddingRight:5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searcView:{
    flex:1,
    width:'100%'
  },
  addIcon:{
    bottom:20,
    right:20,
    position:'absolute',
    zIndex:1
},
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    width:'100%',
    paddingLeft:10,
    paddingRight:10,
    borderWidth:0.5,
    borderColor:colors.primary
    // backgroundColor:colors.primary,
    // marginTop: Platform.OS == 'ios' ? 30 : 0,
  },
 
  inputsearch:{
    backgroundColor:colors.secondary,
    borderRadius:5
  },
  inputSearchContenar:{
    backgroundColor:colors.secondary,
  
  },
  search:{
    width:'100%',
    paddingLeft:10,
    paddingRight:10,
  },
  searchContenar:{
    backgroundColor:colors.cardBackground,
    borderWidth:1,
    borderColor:colors.primary,
    // marginLeft:20,
    // marginRight:20,
    // width:"90%",
    marginBottom:5,
  
  }
});


