import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthContext from './app/auth/contex';
import LoginRegisterNavigation from './app/Navigation/LoginRegisterNavigation';
import MainBouttonNavigation from './app/Navigation/MainBouttonNavigation';
import SignIn from './app/screen/SignIn';
import * as SecureStore from 'expo-secure-store';

export default function App() {
  const [user,setUser] = useState();
 
  useEffect(() => {
               (async () => {
                let result = await SecureStore.getItemAsync("userDetils");
                setUser(result)     
                  })();
             }, []);



  
    if (user){
    return(<MainBouttonNavigation/>)
    }
    else{
    return(<LoginRegisterNavigation/>)
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
