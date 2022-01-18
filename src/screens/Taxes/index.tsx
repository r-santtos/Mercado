import { AdMobBanner } from "expo-ads-admob";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import { userApi } from "../../context";

export default function Taxes() {
  /** CHAMADA API */
  const {resultApi} = userApi();
  const formatDate = new Date(resultApi.taxes[0].date) as any

  /**ADICIONE ZERO À ESQUERDA NA DATA ANTES DE EXIBIR NA TELA */
  const day = ("0" + formatDate.getDate()).slice(-2);
  const monthplus = formatDate.getMonth()+1;
  const month = ("0" + monthplus).slice(-2);
  const showView = `${parseInt(day)+1}/${month}/${formatDate.getFullYear()}`

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.txt, {fontSize: 24}]}>Taxas</Text>
        <Text style={[styles.txt, {color: 'gray'}]}>rendimento anual</Text>
      </View>

      {/** ADMOB */}
      <View style={styles.admob}>
        <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-9749684125060902/7464988445"
            servePersonalizedAds
          />
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
              <Text style={[styles.txt, {color: 'gray'}]}>CDI</Text>
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              <>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'percent', 
                  currency: 'BRL',
                  maximumFractionDigits: 4
                }).format(resultApi.taxes[0].cdi / 100)}
              </>
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{showView}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>CDI/DIA</Text>
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              <>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'percent', 
                  currency: 'BRL',
                  maximumFractionDigits: 4
                }).format(resultApi.taxes[0].cdi_daily / 100)}
              </>
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{showView}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>SELIC</Text>
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              <>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'percent', 
                  currency: 'BRL',
                  maximumFractionDigits: 4
                }).format(resultApi.taxes[0].selic / 100)}
              </>
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{showView}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>SELIC/DIA</Text>
            </View>

            <Text style={[styles.txt, {fontSize: 18}]}>
              <>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'percent', 
                  currency: 'BRL',
                  maximumFractionDigits: 4
                }).format(resultApi.taxes[0].selic_daily / 100)}
              </>
            </Text>

            <Text style={[styles.txt, {color: 'gray'}]}>{showView}</Text>
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
  admob: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
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