import {SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from '@navigators/Navigators';
import {navigationRef} from '@helpers/NavigatorHelper';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={{flex: 1}}>
        <AuthStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
