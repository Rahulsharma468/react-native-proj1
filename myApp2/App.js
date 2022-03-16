/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View , Text , StyleSheet , SafeAreaView} from 'react-native'; 
import Navigation from './src/navigation';

import SignInScreen from './src/pages/signIn';

class App extends React.Component{
  render(){
    return(
      <SafeAreaView style={styles.conatiner}>
        <Navigation />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;
