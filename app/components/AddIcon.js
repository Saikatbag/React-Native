import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../styles/colors';

function AddIcon({style,onPress}) {
    return (
        <View style={[style,styles.contenar]}>
            <TouchableOpacity 
            style={styles.iconContenar}
            onPress={onPress}
            >
            <Ionicons name="add" size={40} color={colors.secondary} />
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
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:colors.primary,
        borderRadius:26,
    }
})
export default AddIcon;

