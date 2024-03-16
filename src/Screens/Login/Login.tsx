import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Fonts} from '@constants/Fonts';
import {scale} from '@utils/Scale';
import {Colors} from '@constants/Colors';
import {replace} from '@helpers/NavigatorHelper';
import {NavRoutes} from '@constants/NavRoutes';

const Login: React.FC = () => {
  const onPressLogin = () => {
    replace(NavRoutes.MainTab);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>The Most trusted Chatting App</Text>
      <Image
        source={require('@assets/Images/app_icon.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={onPressLogin}>
        <Image
          source={require('@assets/Images/sign_in_with_google.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    backgroundColor: Colors.white,
  },
  heading: {
    fontFamily: Fonts.SfProBold,
    fontSize: scale(36),
    color: Colors.textColorBold,
    position: 'absolute',
    top: scale(100),
  },
  image: {
    resizeMode: 'contain',
    height: '30%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: scale(60),
  },
  buttonImage: {
    resizeMode: 'contain',
    height: scale(50),
  },
});

export default Login;
