import React from 'react';

import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '95%',
    flex: 1,
    backgroundColor: 'hsl(50 100% 50%)',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    margin: 40,
  },
});

function HomeScreen(): JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
