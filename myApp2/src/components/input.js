import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
const CustomInput = ({rules = {}, name, control, input_name, secureText}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.input_conatiner,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              placeholder={input_name}
              style={styles.input_text}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={secureText}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch', marginLeft: 30}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  input_conatiner: {
    backgroundColor: 'white',
    width: 300,

    borderColor: 'e8e8e8',
    borderWidth: 1,
    borderRadius: 15,

    paddingHorizontal: 15,

    marginVertical: 8,
  },
  input_text: {
    color: 'black',
  },
});

export default CustomInput;
