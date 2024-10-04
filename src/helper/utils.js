import {Platform, useColorScheme} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const isIOS = Platform.OS === 'ios';
export const fontsize = val => RFValue(val, 812);

export const emailRegex = /^[a-z0-9.]+@[a-z0-9-]+\.[a-z]{2,}$/;
export const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
export const phoneRegex = /^[0-9]{0,10}$/;
