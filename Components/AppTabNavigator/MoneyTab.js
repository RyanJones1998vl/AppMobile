<<<<<<< HEAD
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation'
import {Icon} from 'native-base';


class MoneyTab extends Component{
    static navigationOptions={
            tabBarIcon:({tintColor})=>(
                <Icon name='cog' style={{color:tintColor}}/>
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

=======
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation'
import {Icon} from 'native-base';


class MoneyTab extends Component{
    static navigationOptions={
            tabBarIcon:({tintColor})=>(
                <Icon name='cog' style={{color:tintColor}}/>
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

>>>>>>> 14020e034b8a89b7308a718edfabb8e3175b7a41
export default MoneyTab;