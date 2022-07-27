import * as React from 'react';
import { Button, View, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MyAccountScreen from '../screen/MyAccountScreen';
import ClientsScreen from '../screen/ClientsScreen';
import RemindersScreen from '../screen/RemindersScreen';
import AboutScreen from '../screen/AboutScreen';
import ProfileImage from '../components/ProfileImage';
import CustomComponent from '../components/CustomComponent';
import colors from '../styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedbackScreen from '../screen/FeedbackScreen';

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation
        initialRouteName="MyAccount"
        drawerContent={props => (<CustomComponent {...props} style={styles.profile} />)}
        screenOptions={{
          drawerActiveBackgroundColor: colors.cardBackground,
          drawerActiveTintColor: colors.primary,
          drawerInactivetinColor: colors.textcolor,
          // drawerLabelStyle:{
          //   marginLeft:-20
          // }
        }}

      >
        <Drawer.Screen name="MyAccount" component={MyAccountScreen} options={{
          drawerIcon: ({ color }) => (
            <Image style={[styles.icon, { tintColor: color }]} source={require("../assets/icon/MyAccount.png")} />
          )
        }} />
        <Drawer.Screen name="Client" component={ClientsScreen} options={{
          drawerIcon: ({ color }) => (
            <Image style={[styles.icon, { tintColor: color }]} source={require("../assets/icon/Clients.png")} />
          )
        }} />
        <Drawer.Screen name="Reminder" component={RemindersScreen} options={{
          drawerIcon: ({ color }) => (
            <Image style={[styles.icon, { tintColor: color }]} source={require("../assets/icon/Reminders.png")} />
          )
        }} />
        <Drawer.Screen name="About" component={AboutScreen} options={{
          drawerIcon: ({ color }) => (
            <Image style={[styles.icon, { tintColor: color }]} source={require("../assets/icon/About.png")} />
          )
        }} />
        <Drawer.Screen name="Suggesting Improvements" component={FeedbackScreen} options={{
          drawerIcon: ({ color }) => (
            <Image style={[styles.icon, { tintColor: color }]} source={require("../assets/icon/Sugg.png")} />
          )
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  icon: {
    height: 22,
    width: 22,

  }
})
