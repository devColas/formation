import React, {Component} from 'react';
import {View} from 'react-native';
import MainScreen from './components/MainScreen/MainScreen';
import store from './store/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      screen: null,
      // screen: (
      //   <MainScreen
      //     onScreenSelection={selectedScreen =>
      //       this.setState({screen: selectedScreen})
      //     }
      //   />
      // ),
    };
  }
  componentDidMount() {
    store.dispatch({type: 'SET_SCREEN', value: <MainScreen />});

    // au montage on set l'état
    this.setState({
      screen: store.getState().navigation.screen,
      products: store.getState().navigation.products,
    });

    store.subscribe(() => {
      this.setState({
        screen: store.getState().navigation.screen,
        products: store.getState().navigation.products,
      });
    });

    store.dispatch({
      type: 'INIT_PRODUCTS_LIST',
    });
  }
  componentDidUpdate() {
    console.log("une mise a jour d'etat a été effectuée", this.state);
  }
  render() {
    return this.state.screen;
  }
}

export default App;
