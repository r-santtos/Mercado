import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar
} from 'react-native';

export default function Brokers() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Brokers</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#02080F',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 12,
  },
  txt: {
    fontWeight: '700',
    color: '#fff'
  },
});