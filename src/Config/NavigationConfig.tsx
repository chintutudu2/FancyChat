import ChatHeading from '@components/Chat/ChatHeading';
import {NavRoutes} from '@constants/NavRoutes';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs/src/types';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

// Default nav options for all stack screens
export const appScreensStackOptions: Partial<
  | Record<NavRoutes, NativeStackNavigationOptions>
  | Record<NavRoutes, BottomTabNavigationOptions>
> = {
  [NavRoutes.ChatScreen]: {
    headerShown: true,
    header: () => <ChatHeading />,
  },
};

// Default nav options for all tab screens
export const appScreensTabOptions: Partial<
  Record<NavRoutes, BottomTabNavigationOptions>
> = {
  [NavRoutes.Chat]: {
    headerShown: true,
    header: () => <ChatHeading />,
  },
};
