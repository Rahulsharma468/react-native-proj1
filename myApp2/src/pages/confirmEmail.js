import React, { useState } from "react";
import { ScrollView , View , Text , StyleSheet } from "react-native";

import Button from "../components/button";
import CustomInput from "../components/input";


const OnSignInPress = () => {

}

const ConfirmEmail = () => {

    const [otp , setOtp] = useState('');
    const [email , setEmail] = useState('');

    return(
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Email</Text>

                
                <CustomInput input_name="email" value={email} setValue={setEmail} />
                <CustomInput input_name="otp" value={otp} setValue={setOtp} />
                
                <Button button_text="Resend Code" onPress={OnSignInPress} type="SECONDARY"/>

                <Button button_text="Confirm" onPress={OnSignInPress} />
                <Button button_text="Back To Sign In" onPress={OnSignInPress} type="PRIMARY"/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10
    }
})

export default ConfirmEmail;