import React, {Component} from 'react';
import {View} from 'react-native';
import MainScreen from './components/MainScreen/MainScreen';

class App extends Component {
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
        <MainScreen />
      </View>
    );
  }
}

export default App;
