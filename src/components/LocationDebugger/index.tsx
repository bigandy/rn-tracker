import React from 'react';

import {
  Platform,
  Linking,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import GetLocation from 'react-native-get-location';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    marginBottom: 8,
  },
});

function LocationDebugger(): JSX.Element {
  return (
    <>
      <Text style={styles.instructions}>Extra functions:</Text>
      <View style={styles.button}>
        <Button
          title="Open App Settings"
          onPress={() => {
            GetLocation.openAppSettings();
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Open Gps Settings"
          onPress={() => {
            GetLocation.openGpsSettings();
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Open Wifi Settings"
          onPress={() => {
            GetLocation.openWifiSettings();
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Open Mobile Data Settings"
          onPress={() => {
            GetLocation.openCelularSettings();
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Open Linking Settings"
          onPress={() => {
            Linking.openSettings();
          }}
        />
      </View>
      <Text style={styles.instructions}>{instructions}</Text>
    </>
  );
}

export default LocationDebugger;
