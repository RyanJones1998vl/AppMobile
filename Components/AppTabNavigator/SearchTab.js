import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation'
import {Icon} from 'native-base';


class SearchTab extends Component{
    static navigationOptions={
            tabBarIcon:({tintColor})=>(
                <Icon name='paper' style={{color:tintColor}}/>
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

export default SearchTab;