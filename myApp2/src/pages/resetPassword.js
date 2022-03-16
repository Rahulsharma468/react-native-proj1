import React, { useState } from "react";
import { ScrollView , View , Text , StyleSheet } from "react-native";

import Button from "../components/button";
import CustomInput from "../components/input";


const OnSignInPress = () => {

}

const ResetPassword = () => {

    const [code , setCode] = useState('');
    const [newPassword , setnewPassword] = useState('');

    return(
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Email</Text>

                <CustomInput input_name="code" value={code} setValue={setCode} />
                <CustomInput input_name="password" value={newPassword} setValue={setnewPassword} />
                
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

export default ResetPassword;