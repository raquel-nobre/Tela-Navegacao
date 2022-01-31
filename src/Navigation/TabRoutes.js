import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import {
    Home,
    Profile,
    Explore
} from '../Screens';
import imagePath from '../constants/imagePath';


const Tab = createBottomTabNavigator();

function TabRoutes() {
    return (
       
            <Tab.Navigator 
                 initialRouteName={navigationStrings.HOME}
                 screenOptions={{
                     headerShown: false, 
                     tabBarActiveTintColor: 'red',
                     tabBarInactiveTintColor: 'gray',
                     tabBarShowLabel: false,
                     tabBarStyle:{
                         position: 'absolute',
                         backgroundColor:'white',
                     }
                }}
            >
                <Tab.Screen name={navigationStrings.HOME} component={Home}
                options={{
                    tabBarIcon: ({focused})=>{
                    return(
                        <Image
                        style={{
                            tintColor: focused ? 'red': 'gray'
                        }}
                        source={imagePath.icHome}/>
                    )

                    }

                }}
                />
                <Tab.Screen name={navigationStrings.PROFILE}
                 component={Profile}
                 options={{
                 tabBarIcon: ({focused})=>{
                    return(
                        <Image
                        style={{
                            tintColor: focused ? 'red': 'gray'
                        }}
                        
                        source={imagePath.icProfile}/>
                    )

                    }

                }}
                 />
                <Tab.Screen name={navigationStrings.EXPLORE} 
                component={Explore}
                options={{
                    tabBarIcon: ({focused})=>{
                       return(
                        <Image
                        style={{
                            tintColor: focused ? 'red': 'gray'
                        }}
                           
                           source={imagePath.icExplore}/>
                       )
   
                       }
   
                   }}
                />
            </Tab.Navigator>
       
    )
}

export default TabRoutes