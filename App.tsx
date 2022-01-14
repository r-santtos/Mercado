/** CONVERTER PARA MOEDAS */
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import Routes from './src/routes';
import ProvidedContext from './src/context';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#02080F', flex: 1}}>
      <ProvidedContext>
        <StatusBar style='light' backgroundColor='transparent' />
        <Routes />
      </ProvidedContext>
    </SafeAreaView>
  );
}