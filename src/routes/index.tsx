import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

/** IMPORT SCREENS */
import Brokers from '../screens/Brokers';
import Coins from '../screens/Coins';
import Stocks from '../screens/Stocks';
import Taxes from '../screens/Taxes';

function Routes() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{backgroundColor: '#02080F', flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Brokers"
          screenOptions={
            {
              "tabBarActiveTintColor": "#C6DE41",
              "tabBarInactiveTintColor": "gray",
              "tabBarLabelStyle": {
                "padding": 0,
              },
              "tabBarStyle": [
                {
                  "display": "flex",
                  "backgroundColor": "#161B22",
                  "borderTopColor": "#161B22",
                  "paddingTop": 4,
                  "paddingBottom": 4,
                  "alignItems": "flex-start",
                  "justifyContent": "space-between"
                },
                null
              ]
            }
          }
        >
          <Tab.Screen
            name="Brokers"
            component={Brokers}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="iobroker" size={size+5} color={color} />
              )
            }}
          />
        
          <Tab.Screen
            name="Coins"
            component={Coins}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({size, color}) => (
                <Fontisto name="money-symbol" size={size} color={color} />
              )
            }}
          />

          <Tab.Screen 
            name="Stocks" 
            component={Stocks}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({size, color}) => (
                <Ionicons name="business" size={size} color={color} />
              )
            }}
          />

          <Tab.Screen 
            name="Taxes" 
            component={Taxes}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="bank-plus" size={size} color={color} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Routes;