import React from "react";
import { View , Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../pages/signIn';
import SignUp from '../pages/singUp';
import ConfirmEmail from '../pages/confirmEmail';
import ForgotPassword from '../pages/forgotPassword';
import ResetPassword from '../pages/resetPassword';
import HomeScreen from "../pages/HomeScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SignIn" >

                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;