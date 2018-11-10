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
export default ImageTab;