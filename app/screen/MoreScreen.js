import React from 'react';
import{ View, Text, StyleSheet} from 'react-native';
import Button1 from '../components/Button1';

function MoreScreen({navigation}) {
    return (
        <View style={styles.contenar}>
            <Button1 name='About Us' onPress={() => navigation.navigate('About')}/>
            <Button1 name='FAQ' onPress={() => navigation.navigate('FaqScreen')}/>
            <Button1 name='Feedback' onPress={() => navigation.navigate('FeedBack')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    contenar:{
        flex:1,
        padding:10,
        // justifyContent:'center',
        alignItems:"center",
        
    }
})
export default MoreScreen;