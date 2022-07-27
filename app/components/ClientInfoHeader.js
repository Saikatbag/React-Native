import React from 'react';
import {View,StyleSheet, Text} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';


function ClientInfoHeader({client_name, onPress}) {
    return (
        <View style={styles.contenar}>
            <Text style={styles.text}>{client_name}</Text>
            <TouchableOpacity style={styles.tuch}
            onPress={onPress }
            >
            <MaterialIcons name="edit" size={24} color={colors.primary} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contenar:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    tuch:{
        borderWidth:1,
        borderBottomColor:colors.primary,
        height:28,
        width:32,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:4,
    },
    text:{
        fontSize:24,
    }
})
export default ClientInfoHeader;