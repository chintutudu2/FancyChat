import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const guidelineBaseWidth = 375;

export const getPercentage = (size: number) =>
  (size / guidelineBaseWidth) * 100;

export const scaleHeight = (size: number) => {
  return hp(getPercentage(size) + '%');
};

export const scale = (size: number) => {
  return wp(getPercentage(size) + '%');
};
