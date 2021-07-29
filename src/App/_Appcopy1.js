import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import MyButton from './components/MyButton/MyButton';

class App_copy1 extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
  componentDidUpdate() {
    console.log("une mise a jour d'etat", this.state);
  }
  render() {
    return (
      <View>
        <Text>Voici la valeur du compteur : {this.state.counter}</Text>
        <MyButton
          titre="increment"
          color="blue"
          onMyButtonClicked={arg => {
            this.setState({counter: this.state.counter + 1});
            console.log('button incr clicked', arg);
          }}
        />
        <MyButton
          titre="decrement"
          color="orange"
          onMyButtonClicked={arg => {
            this.setState({counter: this.state.counter - 1});
            console.log('button decr clicked', arg);
          }}
        />
        <MyButton
          titre="reset"
          color="red"
          onMyButtonClicked={arg => {
            this.setState({counter: 0});
            console.log('button reset clicked', arg);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
