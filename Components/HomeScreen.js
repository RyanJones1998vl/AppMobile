<<<<<<< HEAD
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import MoneyTab from './AppTabNavigator/MoneyTab';
import MemoryTab from './AppTabNavigator/MemoryTab';
import ImageTab from './AppTabNavigator/ImageTab';

class HomeScreen extends Component{
    static navigationOptions={
        title: "HomeScreen"
    }
    render(){
        return(
            <AppTabNavigator />
        );
    }
}

export default HomeScreen;

const AppTabNavigator=createBottomTabNavigator({
    HomeTab:{
        screen: HomeTab
    },
    MemoryTab:{
            screen: MemoryTab
    },
    MoneyTab:{
            screen: MoneyTab
    },
    ImageTab:{
            screen: ImageTab
    },
    SearchTab:{
            screen: SearchTab
    },
},
{
    animatedEnabled: true,
    swipeEnabled: true,
    tabBarOptions:{
        activeTintColor:'#000',
        inactiveTintColor:'tomato',
        showLabel: false,
        showIcon: true,
    }
}
=======
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import MoneyTab from './AppTabNavigator/MoneyTab';
import MemoryTab from './AppTabNavigator/MemoryTab';
import ImageTab from './AppTabNavigator/ImageTab';

class HomeScreen extends Component{
    static navigationOptions={
        title: "HomeScreen"
    }
    render(){
        return(
            <AppTabNavigator />
        );
    }
}

export default HomeScreen;

const AppTabNavigator=createBottomTabNavigator({
    HomeTab:{
        screen: HomeTab
    },
    MemoryTab:{
            screen: MemoryTab
    },
    MoneyTab:{
            screen: MoneyTab
    },
    ImageTab:{
            screen: ImageTab
    },
    SearchTab:{
            screen: SearchTab
    },
},
{
    animatedEnabled: true,
    swipeEnabled: true,
    tabBarOptions:{
        activeTintColor:'#000',
        inactiveTintColor:'tomato',
        showLabel: false,
        showIcon: true,
    }
}
>>>>>>> 14020e034b8a89b7308a718edfabb8e3175b7a41
)