import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';

import { styles } from './HomeScreen';

function SettingsScreen(): JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings!</Text>
      </View>
    </ScrollView>
  );
}
export default SettingsScreen;
