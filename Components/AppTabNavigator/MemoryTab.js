import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation'
import {Icon} from 'native-base';


class MemoryTab extends Component{
    static navigationOptions={
            tabBarIcon:({tintColor})=>(
                <Icon name='bookmarks' style={{color:tintColor}}/>
            )
        }
    render(){
        return(
            <View>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}

export default MemoryTab;