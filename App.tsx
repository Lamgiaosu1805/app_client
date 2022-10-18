import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeScreens from './src/screens/HomeScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>
      <MyApp />
    </Provider>
   
  );
}

const MyApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
