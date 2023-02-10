import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';

type StackNavigatorParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<StackNavigatorParamList>();

function App(): JSX.Element {
  const transitionAnimation = {
    ...TransitionPresets.SlideFromRightIOS,
  } as NativeStackNavigationOptions;

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Screen1"
        screenOptions={(): NativeStackNavigationOptions => transitionAnimation}
      >
        <Screen name="Screen1" options={{ headerShown: false }} component={Screen1} />
        <Screen name="Screen2" options={{ headerShown: false }} component={Screen2} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
