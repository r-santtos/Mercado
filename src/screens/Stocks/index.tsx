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

export default function Stocks() {
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
        <Text style={[styles.txt, {fontSize: 24}]}>Bolsa de Valores</Text>
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
              {resultApi.stocks.IBOVESPA.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.IBOVESPA.variation  / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.IBOVESPA.variation  / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'decimal', 
                currency: 'BRL' 
              }).format(resultApi.stocks.IBOVESPA.points)}
            </Text>

            <View>
              <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.stocks.IBOVESPA.name}</Text>
              <Text style={[styles.txt, {color: 'gray', fontSize: 10}]}>{resultApi.stocks.IBOVESPA.location}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              {resultApi.stocks.IFIX.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.IFIX.variation  / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.IFIX.variation  / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'decimal', 
                currency: 'BRL' 
              }).format(resultApi.stocks.IFIX.points)}
            </Text>

            <View>
              <Text style={[styles.txt, {color: 'gray'}]}>Imbomiliários B3</Text>
              <Text style={[styles.txt, {color: 'gray', fontSize: 10}]}>{resultApi.stocks.IBOVESPA.location}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              {resultApi.stocks.NASDAQ.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.NASDAQ.variation  / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.NASDAQ.variation  / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'decimal', 
                currency: 'BRL' 
              }).format(resultApi.stocks.NASDAQ.points)}
            </Text>

            <View>
              <Text style={[styles.txt, {color: 'gray'}]}>NASDAQ</Text>
              <Text style={[styles.txt, {color: 'gray', fontSize: 10}]}>{resultApi.stocks.NASDAQ.location}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              {resultApi.stocks.DOWJONES.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.DOWJONES.variation  / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.DOWJONES.variation  / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'decimal', 
                currency: 'BRL' 
              }).format(resultApi.stocks.DOWJONES.points)}
            </Text>

            <View>
              <Text style={[styles.txt, {color: 'gray'}]}>Dow Jones</Text>
              <Text style={[styles.txt, {color: 'gray', fontSize: 10}]}>{resultApi.stocks.DOWJONES.location}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              {resultApi.stocks.CAC.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.CAC.variation  / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.CAC.variation  / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'decimal', 
                currency: 'BRL' 
              }).format(resultApi.stocks.CAC.points)}
            </Text>

            <View>
              <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.stocks.CAC.name}</Text>
              <Text style={[styles.txt, {color: 'gray', fontSize: 10}]}>{resultApi.stocks.CAC.location}</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              {resultApi.stocks.NIKKEI.variation >= 0 ? (
                <Text style={[styles.txt, {color: '#C6DE41'}]}>
                  <AntDesign name="arrowup" size={11} color="#C6DE41" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.NIKKEI.variation  / 100)}
                </Text>
              ) : (
                <Text style={[styles.txt, {color: '#d55e38'}]}>
                  <AntDesign name="arrowdown" size={11} color="#d55e38" />
                  {Intl.NumberFormat('pt-BR', { 
                    style: 'percent',
                    currency: 'BRL',
                    maximumFractionDigits: 4
                  }).format(resultApi.stocks.NIKKEI.variation  / 100)}
                </Text>
              )}
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              {Intl.NumberFormat('pt-BR', { 
                style: 'decimal', 
                currency: 'BRL' 
              }).format(resultApi.stocks.NIKKEI.points)}
            </Text>

            <View>
              <Text style={[styles.txt, {color: 'gray'}]}>{resultApi.stocks.NIKKEI.name}</Text>
              <Text style={[styles.txt, {color: 'gray', fontSize: 10}]}>{resultApi.stocks.NIKKEI.location}</Text>
            </View>
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
    height: 110,
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