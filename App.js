/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * decoratorsBeforeExport:true
 */

import React from 'react';
import {

  StatusBar,
} from 'react-native';

import AppStack from './src/routes/AppStack';


const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor = "#ff6666"/>
      <AppStack />
     
    </>
  );
};


export default App;
