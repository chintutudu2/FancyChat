import ChatHeading from '@components/Chat/ChatHeading';
import {NavRoutes} from '@constants/NavRoutes';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs/src/types';

// Default nav options for all tab screens
export const appScreensTabOptions: Partial<
  Record<NavRoutes, BottomTabNavigationOptions>
> = {
  [NavRoutes.Chat]: {
    headerShown: true,
    header: () => <ChatHeading />,
  },
};
