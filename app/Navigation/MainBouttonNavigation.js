import * as React from 'react';
import { View,Text,Image,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialCommunityIcons} from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoreScreen from '../screen/MoreScreen';
import MyAccountScreen from '../screen/MyAccountScreen';
import RemindersScreen from '../screen/RemindersScreen';
import ClientsScreen from '../screen/ClientsScreen';
import MorePageNavigation from './MorePageNavigation';
import MyProfileNavigation from './MyProfileNavigation';
import ClientsNavigation from './ClientsNavigation';
//screen 


const Tab= createBottomTabNavigator();

function MainBouttonNavigation() {
    
    return (
            <NavigationContainer independent={true}>
              <Tab.Navigator
              screenOptions={{
                // tabBarStyle: { position: 'absolute' },
                tabBarActiveTintColor:'white',
                
              }}
              tabBarOptions={{
                activeBackgroundColor:'black',
                inactiveBackgroundColor:'#4f1b1f',
              }}
              >
               
                <Tab.Screen
                  name="Clients"
                  component={ClientsNavigation}
                  options={{ 
                    headerShown:false,
                    tabBarIcon: ({focused}) => ( 
                    <Image source={require('../assets/icon/Clients.png')} 
                    style={[styles.img, {tintColor:focused ? '#ffffff' : '#e7dcd4'}]}/>
                    )
                  }}
                  
                />
                <Tab.Screen 
                name="Reminders" 
                component={RemindersScreen} 
                options={{
                  tabBarIcon: ({focused}) => ( 
                    <Image source={require('../assets/icon/Reminders.png')} 
                    style={[styles.img,{tintColor:focused ? '#ffffff' : '#e7dcd4'}]}/>
                    )
                  }}
                />
                <Tab.Screen 
                name="MyAccount" 
                component={MyProfileNavigation} 
                options={{
                  headerShown:false,
                  tabBarIcon: ({focused}) => ( 
                    <Image source={require('../assets/icon/MyAccount.png')} 
                    style={[styles.img,{tintColor:focused ? '#ffffff' : '#e7dcd4'}]}/>
                    )
                  }}
                />
                <Tab.Screen 
                name="More" 
                component={MorePageNavigation} 
                options={{
                   headerShown:false,
                  tabBarIcon: ({focused}) => ( 
                    <Image source={require('../assets/icon/More.png')} 
                    
                    style={[styles.img ,{tintColor:focused ? '#ffffff' : '#e7dcd4'}]}
                    />
                    )
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          );
}


const styles = StyleSheet.create({
  img:{
    height:30,
    width:30,
  }
})

export default MainBouttonNavigation;