import React, {Component} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {IMG_CART, IMG_FORM, IMG_LOGO} from '../../ressources/image';
import {displayName as appName} from '../../../../app.json';
import styles from './MainScreenStyle';
import SquareButton from '../SquareButton/SquareButton';
import PropTypes from 'prop-types';
import FormProduct from '../FormProduct/FormProduct';
import store from '../../store/store';
import ListProducts from '../ListProducts/ListProducts';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>{appName}</Text>
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: IMG_LOGO,
            }}
            style={styles.logo}
          />
        </View>
        <View style={styles.buttonContainer}>
          <SquareButton
            text="Nouveau"
            onPress={e => {
              //this.props.onScreenSelection(<FormProduct />);
              store.dispatch({type: 'SET_SCREEN', value: <FormProduct />});
            }}>
            <Image
              source={{
                uri: IMG_CART,
              }}
              style={styles.buttonIcon}
            />
          </SquareButton>
          <SquareButton
            text="Mon compte"
            onPress={e => {
              store.dispatch({type: 'SET_SCREEN', value: <ListProducts />});
            }}>
            <Image
              source={{
                uri: IMG_FORM,
              }}
              style={styles.buttonIcon}
            />
          </SquareButton>
        </View>
      </View>
    );
  }
}

MainScreen.propTypes = {
  //onScreenSelection: PropTypes.func.isRequired,
};
export default MainScreen;
