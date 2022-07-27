import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../styles/colors';

function AddUserIcon({style, onPress}) {
    return (
        <View style={[style,styles.contenar]}>
            <TouchableOpacity 
            style={styles.iconContenar}
            onPress={onPress}
            >
            <AntDesign name="adduser" size={40} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    contenar:{
        height:60,
        width:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.primaryLight,
        borderRadius:30
    },
    iconContenar:{
        height:52,
        width:52,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:colors.primary,
        borderRadius:26,
    }
})
export default AddUserIcon;

