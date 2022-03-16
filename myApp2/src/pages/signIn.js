import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import Logo from '../../assets/logo.png';

import Button from '../components/button';
import CustomInput from '../components/input';
import {useNavigation} from '@react-navigation/native';

import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const OnSignInPress = data => {
    //validate user
    console.log(data);
    navigation.navigate('HomeScreen');
  };

  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const onRegisterNowPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Text>Logo</Text>
      <Text>Login</Text>
      <CustomInput
        input_name="username"
        name="username"
        control={control}
        rules={{required: 'Username is required*'}}
      />
      <CustomInput
        input_name="password"
        name="password"
        control={control}
        secureText={true}
        rules={{
          required: 'Password is required*',
          minLength: {value: 3, message: 'Minimum 5 charcaters*'},
        }}
      />
      <Button button_text="Login" onPress={handleSubmit(OnSignInPress)} />
      <Button
        button_text="Forgot Password?"
        onPress={onForgotPasswordPress}
        type="TERTIARY"
      />
      <Button
        button_text="Do not have an account? Register Now"
        onPress={onRegisterNowPress}
        type="PRIMARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 100,
  },
});

export default SignInScreen;
