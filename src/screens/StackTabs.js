import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HomeDetail from './HomeDetail';

const Stack = createStackNavigator();

export function HomeStack(){
    return(
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerBackTitle:'返回',
        }}
    >
        <Stack.Screen name="神奇寶貝圖鑑" component={HomeScreen}/>
        <Stack.Screen name="神奇寶貝詳情" component={HomeDetail}/>
    </Stack.Navigator>
    )
}



