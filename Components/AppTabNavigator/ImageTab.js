<<<<<<< HEAD
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation'
import {Icon, Container, Content} from 'native-base';

import CardComponent from '../Card';

class ImageTab extends Component{
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Icon name='eye' style={{color:tintColor}}/>
        )
    }
    render(){
        return(
            <Container>
                <Content>
                    <CardComponent/ >
                </Content>
            </Container>
        );
    }
}

=======
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation'
import {Icon, Container, Content} from 'native-base';

import CardComponent from '../Card';

class ImageTab extends Component{
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Icon name='eye' style={{color:tintColor}}/>
        )
    }
    render(){
        return(
            <Container>
                <Content>
                    <CardComponent/ >
                </Content>
            </Container>
        );
    }
}

>>>>>>> 14020e034b8a89b7308a718edfabb8e3175b7a41
export default ImageTab;