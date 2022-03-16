import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const Button = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.button_container, styles[`container_${props.type}`]]}>
      <Text style={[styles.text_style, styles[`container_text_${props.type}`]]}>
        {props.button_text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: 'blue',
    width: 300,
    padding: 15,
    marginVertical: 8,
    alignItems: 'center',
    borderRadius: 15,
  },
  text_style: {
    fontWeight: 'bold',
    color: 'white',
  },
  container_PRIMARY: {
    backgroundColor: 'transparent',
  },
  container_text_PRIMARY: {
    color: 'grey',
    fontWeight: '200',
  },
  container_TERTIARY: {
    backgroundColor: 'transparent',
    marginLeft: 150,
  },
  container_text_TERTIARY: {
    color: 'grey',
  },

  container_SECONDARY: {
    backgroundColor: 'transparent',
    paddingLeft: 200,
  },
  container_text_SECONDARY: {
    color: 'blue',
  },
});

export default Button;
