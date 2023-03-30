import React, { useState, useCallback } from 'react';
import {
  RefreshControl,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import GetLocation, {
  Location,
  LocationError,
  LocationErrorCode,
} from 'react-native-get-location';

import LocationDebugger from '@components/LocationDebugger';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'hsl(50 100% 50%)',
  },
  welcome: {
    fontSize: 100,
    textAlign: 'center',
    margin: 40,
  },
  location: {
    color: '#333333',
    marginBottom: 5,
  },
});

function GetLocationScreen({ navigation }: { navigation: any }): JSX.Element {
  const showDebug = false; // TODO: is there a way of detecting dev mode?

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<LocationErrorCode | null>(null);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
          const { code, message } = ex;
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
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <Text style={styles.welcome}>Derp</Text>
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
          <Text style={styles.location}>
            {JSON.stringify(location, null, 2)}
          </Text>
        ) : null}
        {error ? <Text style={styles.location}>Error: {error}</Text> : null}

        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />

        {showDebug && <LocationDebugger />}
      </View>
    </ScrollView>
  );
}

export default GetLocationScreen;
