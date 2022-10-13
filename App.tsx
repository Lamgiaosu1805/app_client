import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { testSlice } from './src/components/test/testSlice';
import store from './src/redux/store';

export default function App() {
  const rootApp = () => {
    return (
      <View style={styles.container}>
        <Text>sdf</Text>
        <Button 
          title= "Click here"
          onPress = {
            () => {
              console.log("1212");
              // const dispatch = useDispatch();
              // dispatch(testSlice.actions.textChange("LâmGS"))
            }
          }
        />
        <StatusBar style="auto" />
      </View>
    )
  }
  return (
    <Provider store = {store}>
      {rootApp()}
    </Provider>
   
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
