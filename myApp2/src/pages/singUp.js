import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import Button from '../components/button';
import CustomInput from '../components/input';

import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
let EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cnfpassword, setcnfPassword] = useState('');

  const navigation = useNavigation();
  const {
    control,
    formState: {errors},
    handleSubmit,
    watch,
  } = useForm();

  var pwd = watch('password');
  const OnSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onSignUpPress = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create An Account</Text>

        <CustomInput
          input_name="username"
          name="username"
          control={control}
          rules={{required: 'Username is required*'}}
        />
        <CustomInput
          input_name="email"
          name="email"
          control={control}
          rules={{
            required: 'Email is required*',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Please Enter Proper Email*',
            },
          }}
        />
        <CustomInput
          input_name="password"
          secureText={true}
          name="password"
          control={control}
          rules={{required: 'Password is required*'}}
        />
        <CustomInput
          input_name="confirm password"
          name="confirm password"
          control={control}
          secureText={true}
          rules={{
            required: 'Retype Password*',
            validate: value => value === pwd || 'Password do not match*',
          }}
        />

        <Button button_text="Register" onPress={handleSubmit(onSignUpPress)} />
        <Button
          button_text="Already have an account? Login"
          onPress={OnSignInPress}
          type="PRIMARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default SignUp;
