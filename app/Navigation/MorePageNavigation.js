import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import FAQScreen from '../screen/FAQScreen';
import FeedbackScreen from '../screen/FeedbackScreen';
import MoreScreen from '../screen/MoreScreen';
import AboutUsScreen from '../screen/AboutUsScreen';


const Stack = createStackNavigator();

function MorePageNavigation() {
  return (
      <NavigationContainer independent={true}>
            <Stack.Navigator>
            <Stack.Screen name="More" component={MoreScreen} />
            <Stack.Screen name="About" component={AboutUsScreen} />
            <Stack.Screen name="FaqScreen" component={FAQScreen} 
            options={{
                // headerShown:false
            }}/>
            <Stack.Screen name="FeedBack" component={FeedbackScreen} />
            </Stack.Navigator>
      </NavigationContainer>
      
  );
}
export default MorePageNavigation;