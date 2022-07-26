import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeStack,ProfileStack } from './StackTabs';

export const BottomTabs = () => {
    const Tab = createBottomTabNavigator();

    return(<NavigationContainer>
        <Tab.Navigator
          screenOptions={({route})=>({
           headerShown:false,
           tabBarStyle:{display:'none'},
          })}
        >
          <Tab.Screen name="Home" component={HomeStack}/>
        </Tab.Navigator>
      </NavigationContainer>);
}