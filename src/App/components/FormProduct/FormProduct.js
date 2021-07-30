import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {IMG_CART} from '../../ressources/image';
import store from '../../store/store';
import MainScreen from '../MainScreen/MainScreen';
import SquareButton from '../SquareButton/SquareButton';

const FormProduct = () => {
  return (
    <View>
      <Text>formProduct</Text>
      <Text>{JSON.stringify(store.getState().stock.products)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FormProduct;
