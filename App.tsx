import {SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainTab} from '@navigators/Navigators';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <MainTab />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
