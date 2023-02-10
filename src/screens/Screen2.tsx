import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Screen1 = (): JSX.Element => {
  const navigation = useNavigation();

  const handleButtonPress = (): void => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>SCREEN 2</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Go back!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#fed330',
  },
  screenText: {
    fontSize: 48,
    color: '#3867d6',
    marginBottom: 30,
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: '#fc5c65',
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
  },
});

export default Screen1;
