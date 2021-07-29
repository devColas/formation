import React from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const MyButton = props => {
  console.log(props);
  return (
    <TouchableHighlight
      style={{backgroundColor: props.color, padding: 10}}
      onPress={evt => {
        console.log(evt);
        props.onMyButtonClicked('hello');
      }}
      testID="MyButton">
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 17,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          {props.titre}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
export default MyButton;
