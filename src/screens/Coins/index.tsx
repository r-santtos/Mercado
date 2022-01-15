import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { userApi } from "../../context";

export default function Coins() {
  /** CHAMADA API */
  const {resultApi} = userApi();

  /**ADICIONE ZERO À ESQUERDA NA DATA ANTES DE EXIBIR NA TELA */
  const formatDate = new Date() as any
  const day = ("0" + formatDate.getDate()).slice(-2);
  const monthplus = formatDate.getMonth()+1;
  const month = ("0" + monthplus).slice(-2);
  const showView = `${parseInt(day)}/${month}/${formatDate.getFullYear()}`

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.txt, {fontSize: 24}]}>Moedas</Text>
        <Text style={[styles.txt, {color: 'gray'}]}>atualizada {showView}</Text>
      </View>

      <ScrollView
        style={{width: '100%'}}      
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 8,
          paddingHorizontal: 8,
        }}      
      >
        <View style={styles.containerBox}>
          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>USD</Text>
              {resultApi.currencies.USD.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.USD.variation / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.USD.variation / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL'
              }).format(resultApi.currencies.USD.buy)}
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.currencies.USD.name}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>EUR</Text>
              {resultApi.currencies.EUR.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.EUR.variation / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.EUR.variation / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
              }).format(resultApi.currencies.EUR.buy)}
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.currencies.EUR.name}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>GBP</Text>
              {resultApi.currencies.GBP.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.GBP.variation / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.GBP.variation / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
              }).format(resultApi.currencies.GBP.buy)}
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.currencies.GBP.name}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>ARS</Text>
              {resultApi.currencies.ARS.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.ARS.variation / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.ARS.variation / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
              }).format(resultApi.currencies.ARS.buy)}
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.currencies.ARS.name}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>CAD</Text>
              {resultApi.currencies.CAD.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.CAD.variation / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.CAD.variation / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
              }).format(resultApi.currencies.CAD.buy)}
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.currencies.CAD.name}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>AUD</Text>
              {resultApi.currencies.AUD.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.AUD.variation / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.AUD.variation / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
              }).format(resultApi.currencies.AUD.buy)}
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.currencies.AUD.name}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>JPY</Text>
              {resultApi.currencies.JPY.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.JPY.variation / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.JPY.variation / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
              }).format(resultApi.currencies.JPY.buy)}
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.currencies.JPY.name}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>CNY</Text>
              {resultApi.currencies.CNY.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.CNY.variation / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.CNY.variation / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
              }).format(resultApi.currencies.CNY.buy)}
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.currencies.CNY.name}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>BTC</Text>
              {resultApi.currencies.BTC.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.BTC.variation / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.currencies.BTC.variation / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL',
              }).format(resultApi.currencies.BTC.buy)}
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.currencies.BTC.name}</Text>
          </View>
        </View>
      </ScrollView>
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
  },
  txt: {
    fontWeight: '700',
    color: '#fff'
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  containerBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    height: 100,
    width: '49%',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#161B22',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});