import React from 'react';
import{View,Text,StyleSheet} from 'react-native';
import * as SecureStore from 'expo-secure-store'
import Button from '../components/Button';
async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      alert( result);
    } else {
      alert('No values stored under that key.');
    }
  }
function RemindersScreen(props) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:"center",}}>
            <Text> Reminders  </Text>
            
        </View>
    );
}
const styles = StyleSheet.create({
    
})
export default RemindersScreen;