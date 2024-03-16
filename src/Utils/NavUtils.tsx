import {appScreensTabOptions} from '@config/NavigationConfig';
import {NavRoutes} from '@constants/NavRoutes';
import React, {FC} from 'react';

export const CreateScreen = (NavigationStructure: any) => {
  return (screenName: NavRoutes, component: FC) => {
    return (
      <NavigationStructure.Screen name={screenName} component={component} />
    );
  };
};

export const CreateTabScreen = (NavigationStructure: any) => {
  return (
    screenName: NavRoutes,
    component: FC<{navigation?: any; route?: any}>,
  ) => {
    return (
      <NavigationStructure.Screen
        name={screenName}
        component={component}
        options={appScreensTabOptions[screenName]}
      />
    );
  };
};
