import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import store from '../../store/store';
import SquareButton from '../SquareButton/SquareButton';
import styles from './ListProductsStyle';

const ListProducts = props => {
  const [productsLocal, setProductsLocal] = useState([]);

  // a pour but de refresh le component 1 seul fois (au componentDidMount)
  useEffect(() => {
    setProductsLocal(store.getState().stock.products);
    store.subscribe(() => {
      setProductsLocal(store.getState().stock.products);
    });
  }, [1]);

  return (
    <View style={styles.ListProducts} testID="ListProducts">
      <TextInput placeholder="Recherche" />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {productsLocal.map((item, index) => {
          return (
            <SquareButton
              onPress={() => {}}
              text={item.name}
              key={'product_' + index}>
              <Image source={{uri: item.img}} style={{width: 50, height: 50}} />
            </SquareButton>
          );
        })}
      </View>
    </View>
  );
};

export default ListProducts;
