import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
export default class Counter extends Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.store.counter}
        </Text>
        <Button title='Increment' onPress= {() => this.props.store.increment()}>
          <Text>Increment</Text>
        </Button>
        <Button title='Decrememt' onPress= {() => this.props.store.decrement()}>
          <Text>Decrement</Text>
        </Button>
      </View>
    );
  }
}
