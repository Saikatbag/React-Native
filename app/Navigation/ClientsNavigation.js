import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import ClientsScreen from '../screen/ClientsScreen';
import AddClientScreen from '../screen/AddClientScreen';
import ClientInformationScreen from '../screen/ClientInformationScreen';
import AddBillScreen from '../screen/AddBillScreen';
import SendEmailScreen from '../screen/SendEmailScreen';
import EditBillScreen from '../screen/EditBillScreen';
import ClientHeader from '../components/ClientHeader';
import ClientInfoHeader from '../components/ClientInfoHeader';
import EditClientScreen from '../screen/EditClientScreen';


const Stack = createStackNavigator();

function ClientsNavigation() {
  return (
      <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Clients'>
            <Stack.Screen name="Clients" component={ClientsScreen} options={{
                headerTitle: () => <ClientHeader/>,
            }} />
            <Stack.Screen name="AddClient" component={AddClientScreen}
            options={{
              title : 'Add Client'
                // headerShown:false
            }}
            />
            
            <Stack.Screen name="ClientInformation" component={ClientInformationScreen} 
            options={({ route }) => ({
              headerTitle:() => <ClientInfoHeader client_name={route.params.name}
              
              />
              // title : route.params.name
                // headerShown:false
            })
            }/>
            <Stack.Screen name="AddBill" component={AddBillScreen} 
            options={{
              title : 'Add Bill'
                // headerShown:false
            }}/>
            <Stack.Screen name="EditClient" component={EditClientScreen} 
            options={{
              title : 'Edit Client'
                // headerShown:false
            }}/>
          
              <Stack.Screen name="SendMail" component={SendEmailScreen} 
            options={{
              title : 'Send Mail'
                // headerShown:false
            }}/>
              <Stack.Screen name="EditBill" component={EditBillScreen} 
            options={{
              title : 'Edit Bill'
                // headerShown:false
            }}/>
            </Stack.Navigator>
      </NavigationContainer>
      
  );
}
export default ClientsNavigation;