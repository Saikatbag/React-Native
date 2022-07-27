import React, {useState} from 'react';
import { View,Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import colors from '../styles/colors';
import { Entypo } from '@expo/vector-icons';


function QACard({question,answer}) {
    const [isMore, setIsMore] = useState(false);

    return (
    <View style={styles.contenar}>

        <View style={styles.qContenar}>
            <View style={styles.questionView}>
            <Text style={styles.questionStyle}>{question}</Text>
            </View>
              <TouchableOpacity style={styles.icon}
              onPress={()=>setIsMore(!isMore) }>
            <Entypo name={isMore?"minus":"plus"} size={24} color={colors.primary} />
                  </TouchableOpacity>         
        </View>
            {isMore ? <View style={styles.aContenar}>
                    <Text>{answer}</Text>
                </View> :<Text></Text>
                
            }

    </View>
       
    );
}
const styles = StyleSheet.create({
    contenar:{
        width:'100%'
    },
    qContenar:{
        backgroundColor:colors.cardBackground,
        height:35,
        width:'100%',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:10,
        borderRadius:5,
        flexDirection:'row',
        marginBottom:5,
    },
    aContenar:{
        width:'100%',
        paddingLeft:10,
        paddingRight:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:colors.cardBackground,
        marginBottom:5,
    },
    questionStyle:{
        color:colors.primary,
        fontWeight:'bold',
        fontSize:15,        
    },
    icon:{
        justifyContent:'center',
        alignItems:'center'
    },
    questionView:{
        justifyContent:'center',
    },
    answerStyle:{
        color:colors.secondary,
    }
})
export default QACard;