import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './SquareButtonStyle';
import PropTypes from 'prop-types';

const SquareButton = props => {
  console.log(props);
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.SquareButton}
      testID="SquareButton">
      <>
        <Text style={styles.label}>{props.text}</Text>
        {props.children}
      </>
    </TouchableHighlight>
  );
};

SquareButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default SquareButton;
