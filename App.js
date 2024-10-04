import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';

function App() {
  return (
    <WebView
      source={{uri: 'https://eportal.incometax.gov.in/iec/foservices/#/login'}}
      style={{flex: 1, overflow: 'hidden'}}
    />
  );
}

export default App;
