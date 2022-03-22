import React from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Lottier from '../components/SplashScreen'
import TabRoutes from './TabRoutes';
import { userIsLoading } from '../context/index';

export default function Routes() {
  const { isLoading } = userIsLoading();

  return (
    <View style={{backgroundColor: '#02080F', flex: 1}}>
      <NavigationContainer>
        {isLoading == true ? <TabRoutes /> : <Lottier />}
      </NavigationContainer>
    </View>
  );
}