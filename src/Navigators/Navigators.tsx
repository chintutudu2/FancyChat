import {Colors} from '@constants/Colors';
import {Fonts} from '@constants/Fonts';
import {NavRoutes} from '@constants/NavRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chat, Discover, Login, Settings} from '@screens/index';
import {CreateScreen, CreateTabScreen} from '@utils/NavUtils';
import {scale} from '@utils/Scale';
import React, {FC} from 'react';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      {CreateScreen(Stack)(NavRoutes.Login, Login)}
      {CreateScreen(Stack)(NavRoutes.MainTab, MainTab)}
    </Stack.Navigator>
  );
};

const MainTab: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavRoutes.Chat}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === 'Chat') {
            iconName = focused
              ? require('@assets/Icons/chat.png')
              : require('@assets/Icons/chat_unfocused.png');
          } else if (route.name === 'Settings') {
            iconName = focused
              ? require('@assets/Icons/settings.png')
              : require('@assets/Icons/settings_unfocused.png');
          } else if (route.name === 'Discover') {
            iconName = focused
              ? require('@assets/Icons/discover.png')
              : require('@assets/Icons/discover_unfocused.png');
          }
          return (
            <Image
              source={iconName}
              style={{resizeMode: 'contain', height: size}}
            />
          );
        },
        tabBarLabelStyle: {
          fontFamily: Fonts.SfProSemiBold,
          fontSize: scale(15),
        },
        tabBarActiveTintColor: Colors.textColorBold,
        tabBarInactiveTintColor: Colors.textColorSemiBold,
      })}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}>
      {CreateTabScreen(Tab)(NavRoutes.Discover, Discover)}
      {CreateTabScreen(Tab)(NavRoutes.Chat, Chat)}
      {CreateTabScreen(Tab)(NavRoutes.Settings, Settings)}
    </Tab.Navigator>
  );
};

export {AuthStack, MainTab};
