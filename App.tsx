/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Platform,
  Linking,
  Button,
  StyleSheet,
  Text,
  // useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';

import GetLocation, {
  Location,
  LocationError,
  LocationErrorCode,
} from 'react-native-get-location';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<LocationErrorCode | null>(null);

  const requestLocation = () => {
    setLoading(true);
    setLocation(null);
    setError(null);

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 30000,
      rationale: {
        title: 'Location permission',
        message: 'The app needs the permission to request your location.',
        buttonPositive: 'Ok',
      },
    })
      .then(newLocation => {
        setLoading(false);
        setLocation(newLocation);
      })
      .catch(ex => {
        if (ex instanceof LocationError) {
          const {code, message} = ex;
          console.warn(code, message);
          setError(code);
        } else {
          console.warn(ex);
        }
        setLoading(false);
        setLocation(null);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>
        To get location, press the button:
      </Text>
      <View style={styles.button}>
        <Button
          disabled={loading}
          title="Get Location"
          onPress={requestLocation}
        />
      </View>
      {loading ? <ActivityIndicator /> : null}
      {location ? (
        <Text style={styles.location}>{JSON.stringify(location, null, 2)}</Text>
      ) : null}
      {error ? <Text style={styles.location}>Error: {error}</Text> : null}
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
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  location: {
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    marginBottom: 8,
  },
});

export default App;
