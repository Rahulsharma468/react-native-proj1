import React, { useState } from "react";
import { ScrollView , View , Text , StyleSheet } from "react-native";

import Button from "../components/button";
import CustomInput from "../components/input";


const OnSignInPress = () => {

}

const ForgotPassword = () => {
    const [email , setEmail] = useState('');

    return(
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Forgot Password</Text>

                <Text style={styles.title_1}>Email *</Text>
                
                <CustomInput input_name="email" value={email} setValue={setEmail} />
            
                <Button button_text="Send" onPress={OnSignInPress} />
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
    },
    title_1: {
        paddingRight: 240,
        marginBottom: 8
    }
})

export default ForgotPassword;