import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import MyAccountScreen from '../screen/MyAccountScreen';
import EditProfileScreen from '../screen/EditProfileScreen';
import ChangePassword from '../screen/ChangePassword';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import LoginRegisterNavigation from './LoginRegisterNavigation';


const Stack = createStackNavigator();

function MyProfileNavigation() {
  return (
      <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName= 'MyAccount'>
            <Stack.Screen name="MyAccount" component={MyAccountScreen} options={{
   title: "My Account",
   headerTitleStyle:{
      fontWeight:'bold',
   },
   headerBackVisible:false,
}}
/>
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Stack.Screen name="LoginNavigation" component={LoginRegisterNavigation} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} 
            options={{
                // headerShown:false
            }}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            
            </Stack.Navigator>
      </NavigationContainer>
      
  );
}
export default MyProfileNavigation;