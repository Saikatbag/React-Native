import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import SignIn from '../screen/SignIn';
import SingUpScreen from '../screen/SignUpScreen';
import MainBouttonNavigation from './MainBouttonNavigation';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import TCScreen from '../screen/TCScreen';
import PrivacyPolicyScreen from '../screen/PrivacyPolicyScreen';
import MyAccountScreen from '../screen/MyAccountScreen';

const Stack = createStackNavigator();

function LoginRegisterNavigation() {
  return (
      <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} screenOptions = {{
              // title : "Sign In",
              headerShown: false
              
            }} />
            <Stack.Screen name="SingUp" component={SingUpScreen} options={{
              title : "Sing Up"
            }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{
              title : 'Forgot Password'
                // headerShown:false
            }} />
            <Stack.Screen name="TermsAndCondition" component={TCScreen}
            option ={{ title : "Terms and condition"}} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen}
            option = {{
              title :"Privacy Policy"
            }} />
            <Stack.Screen name="Profile" component={MainBouttonNavigation} options={{
                headerShown:false
            }}/>
            </Stack.Navigator>
      </NavigationContainer>
      
  );
}
export default LoginRegisterNavigation;