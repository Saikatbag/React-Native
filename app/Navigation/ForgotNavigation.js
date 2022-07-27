import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import MyAccountScreen from '../screen/MyAccountScreen';
import LoginRegisterNavigation from './LoginRegisterNavigation';


const Stack = createStackNavigator();

function LogoutNavigation() {
  return (
      <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Myacount" component={MyAccountScreen} />
            <Stack.Screen name="SingUp" component={LoginRegisterNavigation} />
            </Stack.Navigator>
      </NavigationContainer>
      
  );
}
export default LogoutNavigation;