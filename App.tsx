import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { testSlice } from './src/redux/testSlice';
import { useAppDispatch, useAppSelector } from './src/hooks/hooks';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store = {store}>
      <Test />
    </Provider>
   
  );
}

const Test = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text>{useAppSelector(state => state.test.text)}</Text>
      <Button 
        title= "Click here"
        onPress = {
          () => {
            dispatch(testSlice.actions.textChange("LâmGS"))
          }
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
