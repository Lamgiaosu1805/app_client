import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { testSlice } from '../redux/testSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

export default function HomeScreens() {
    const dispatch = useAppDispatch()
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
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });