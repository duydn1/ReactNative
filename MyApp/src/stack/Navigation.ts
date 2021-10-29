import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
};

export type RootStackParamList = {
  Home: {userId: string} | undefined;
  Details: {userId: string} | undefined;
};

type S = keyof RootStackParamList;
export type RootScreenRouteProp<ScreenName extends S> = RouteProp<
  RootStackParamList,
  ScreenName
>;
export type RootScreenNavigationProp<ScreenName extends S> =
  NativeStackNavigationProp<RootStackParamList, ScreenName>;

export type MainScreenProps<ScreenName extends S> = {
  route: RootScreenRouteProp<ScreenName>;
  navigation: RootScreenNavigationProp<ScreenName>;
};
