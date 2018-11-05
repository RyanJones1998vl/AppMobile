import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';
class CardComponent extends Component{
    render(){
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Text>Name</Text>
                            <Text>Date</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Text>image</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon name="heart" style={{color:'black'}}/>
                        </Button>
                    </Left>

                </CardItem>
            </Card>
        )
    }
}

export default CardComponent;