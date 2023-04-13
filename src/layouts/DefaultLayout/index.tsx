import * as React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

interface Props extends React.PropsWithChildren {
  title: string;
}

const DefaultLayout: React.FC<Props> = ({ children, title }: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {children}
      </View>
    </ScrollView>
  );
};
export default DefaultLayout;
