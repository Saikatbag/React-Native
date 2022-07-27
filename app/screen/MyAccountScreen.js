import React,{ useState, useEffect} from 'react';
import{View,Text,StyleSheet} from 'react-native';
import Button from '../components/Button';
import ProfileImage from '../components/ProfileImage';
import TextView from '../components/TextView';
import * as SecureStore from 'expo-secure-store';

// const user = 
// {
//     name:'Saikat Bag',
//     email:'saikatbag10@gmail.com',
//     phone:'8101440420',
//     address:'My address'
// }
function MyAccountScreen({navigation}) {
    const [user, setUser] = useState("")

    useEffect(() => {
          (async () => {
            let result = await SecureStore.getItemAsync("userDetils");
              if (result) {
                  setUser(JSON.parse(result))
              } else {
                  alert('No values stored under that key.');
              }
          })();
        }, []);




    return (
        <View style={styles.contenar}>
            
            <ProfileImage/>
            <TextView name={user.name}
            icon ="user"
            />
            <TextView name={user.email}
            icon ="mail"
            />
            <TextView name={user.phone}
            icon='phone'
            />
            <TextView name= {user.address}
            icon="enviromento"
            />
            <View style = {styles.button}>
            <Button name='UPDATE USER DETAILS'
            onPress={() => navigation.navigate('EditProfileScreen',user)}
            />
            </View>
            <View style = {styles.button1}>
            <Button name='CHANGE PASSWORD'
            onPress={() => navigation.navigate('ChangePassword')}
            />
            <View style={styles.logOut}>

              <Button name='LOGOUT'
            onPress={() =>{
                 SecureStore.deleteItemAsync("userDetils")
                 navigation.navigate('SignIn')
            }
        
        }
            />
            </View>

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    contenar:{flex:1,
        // justifyContent:'center',
        padding:10,
        alignItems:"center",
    },
    logOut:{
        paddingTop:40,
    },
    button:{
        height:40,
        width:'100%',
        paddingTop:15,
    },
    button1:{
        height:40,
        width:'60%',
        marginTop:50,
    }
})
export default MyAccountScreen;