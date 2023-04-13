import React, { useState, useCallback } from 'react';
import {
  RefreshControl,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';

import GetLocation, {
  Location,
  LocationError,
  LocationErrorCode,
} from 'react-native-get-location';

import DefaultLayout from '../layouts/DefaultLayout';
import LocationDebugger from '@components/LocationDebugger';

const styles = StyleSheet.create({
  scrollView: {
    minHeight: '100%',
  },
  sectionTitle: {},
  sectionDescription: {},
  highlight: {},
  container: {},
  welcome: {},
  location: {},
  button: {},
});

export default function LocationScreen(): JSX.Element {
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
      <DefaultLayout title="Location">
        <Text>To get location, press the button:</Text>
        <Button
          disabled={loading}
          title="Get Location"
          onPress={requestLocation}
        />
        {loading ? <ActivityIndicator /> : null}
        {location ? (
          <Text style={styles.location}>
            {JSON.stringify(location, null, 2)}
          </Text>
        ) : null}
        {error ? <Text style={styles.location}>Error: {error}</Text> : null}

        {showDebug && <LocationDebugger />}
      </DefaultLayout>
    </ScrollView>
  );
}
