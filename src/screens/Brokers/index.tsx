import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { userApi } from "../../context";

export default function Brokers() {

  const [loadingAPI, setLoadingAPI] =useState(true);

  /** CHAMADA API */
  const {resultApi, setResultApi} = userApi();

  const callApi = async () => {
    await fetch('https://api.hgbrasil.com/finance?key=2562ce77')
    .then((response) => {
      return response.json();
    })
    .then(jsonBody => {
      try {
        setResultApi(jsonBody.results);
      } catch (error) {
        console.log('API call error')
      } finally {
        setLoadingAPI(false);
      }
    });
  }

  const [statusBtn, setStatusBtn] = useState(true);
  const updates = () => {
    setStatusBtn(false);
    setTimeout(() => {setStatusBtn(true)},900000)

    setLoadingAPI(true);
    callApi();
  }

  useEffect(() => {setTimeout(() => {setStatusBtn(true)},3000)},[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.txt, {fontSize: 24}]}>Corretoras</Text>
          <Text style={[styles.txt, {color: 'gray'}]}>preço do Bitcoin</Text>
        </View>
        {statusBtn == true ?
          <TouchableOpacity style={styles.btn} onPress={() => updates()}>
            <Fontisto name="arrow-swap" size={24} color="#fff" />
          </TouchableOpacity>
        : 
          <View style={styles.btn}>
            <Fontisto name="arrow-swap" size={24} color="gray" />
          </View>
        }

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
              <Text style={[styles.txt, {color: 'gray'}]}>BTC</Text>
                {resultApi.bitcoin.blockchain_info.variation >= 0 ? (
                  <Text style={[styles.txt, {color: '#C6DE41'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#C6DE41"/> : (
                      <>
                        <AntDesign name="arrowup" size={11} color="#C6DE41" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(resultApi.bitcoin.blockchain_info.variation / 100)}
                      </>
                    )}
                  </Text>
                ) : (
                  <Text style={[styles.txt, {color: '#d55e38'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#d55e38"/> : (
                      <>
                        <AntDesign name="arrowdown" size={11} color="#d55e38" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(resultApi.bitcoin.blockchain_info.variation / 100)}
                      </>
                    )}
                  </Text>
                )}
            </View>

            <View>
              <Text style={[styles.txt, {fontSize: 16}]}>
                {Intl.NumberFormat('en', { 
                  style: 'currency', 
                  currency: 'USD'
                }).format(resultApi.bitcoin.blockchain_info.buy)}
              </Text>

              <Text style={[styles.txt, {color: 'gray'}]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(resultApi.bitcoin.blockchain_info.buy * resultApi.currencies.USD.buy)}
              </Text>
            </View>

            <Text style={[styles.txt, {color: 'gray'}]}>Blockchain.info</Text>
          </View>

          {/**------------------------------ */}

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>BTC</Text>
                {resultApi.bitcoin.coinbase.variation >= 0 ? (
                  <Text style={[styles.txt, {color: '#C6DE41'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#C6DE41"/> : (
                      <>
                        <AntDesign name="arrowup" size={11} color="#C6DE41" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(resultApi.bitcoin.coinbase.variation / 100)}
                      </>
                    )}
                  </Text>
                ) : (
                  <Text style={[styles.txt, {color: '#d55e38'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#d55e38"/> : (
                      <>
                        <AntDesign name="arrowdown" size={11} color="#d55e38" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(resultApi.bitcoin.coinbase.variation / 100)}
                      </>
                    )}
                  </Text>
                )}
            </View>

            <View>
              <Text style={[styles.txt, {fontSize: 16}]}>
                {Intl.NumberFormat('en', { 
                  style: 'currency', 
                  currency: 'USD'
                }).format(resultApi.bitcoin.coinbase.last)}
              </Text>

              <Text style={[styles.txt, {color: 'gray'}]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(resultApi.bitcoin.coinbase.last * resultApi.currencies.USD.buy)}
              </Text>
            </View>

            <Text style={[styles.txt, {color: 'gray'}]}>Coinbase</Text>
          </View>

          {/**------------------------------ */}

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>BTC</Text>
                {resultApi.bitcoin.bitstamp.variation >= 0 ? (
                  <Text style={[styles.txt, {color: '#C6DE41'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#C6DE41"/> : (
                      <>
                        <AntDesign name="arrowup" size={11} color="#C6DE41" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(resultApi.bitcoin.bitstamp.variation / 100)}
                      </>
                    )}
                  </Text>
                ) : (
                  <Text style={[styles.txt, {color: '#d55e38'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#d55e38"/> : (
                      <>
                        <AntDesign name="arrowdown" size={11} color="#d55e38" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(resultApi.bitcoin.bitstamp.variation / 100)}
                      </>
                    )}
                  </Text>
                )}
            </View>

            <View>
              <Text style={[styles.txt, {fontSize: 16}]}>
                {Intl.NumberFormat('en', { 
                  style: 'currency', 
                  currency: 'USD'
                }).format(resultApi.bitcoin.bitstamp.buy)}
              </Text>

              <Text style={[styles.txt, {color: 'gray'}]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(resultApi.bitcoin.bitstamp.buy * resultApi.currencies.USD.buy)}
              </Text>
            </View>

            <Text style={[styles.txt, {color: 'gray'}]}>Bitstamp</Text>
          </View>

          {/**------------------------------ */}

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>BTC</Text>
                {resultApi.bitcoin.foxbit.variation >= 0 ? (
                  <Text style={[styles.txt, {color: '#C6DE41'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#C6DE41"/> : (
                      <>
                        <AntDesign name="arrowup" size={11} color="#C6DE41" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(resultApi.bitcoin.foxbit.variation / 100)}
                      </>
                    )}
                  </Text>
                ) : (
                  <Text style={[styles.txt, {color: '#d55e38'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#d55e38"/> : (
                      <>
                        <AntDesign name="arrowdown" size={11} color="#d55e38" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(resultApi.bitcoin.foxbit.variation / 100)}
                      </>
                    )}
                  </Text>
                )}
            </View>

            <View>
              <Text style={[styles.txt, {fontSize: 16}]}>
                {Intl.NumberFormat('en', { 
                  style: 'currency', 
                  currency: 'USD'
                }).format(resultApi.bitcoin.foxbit.last)}
              </Text>

              <Text style={[styles.txt, {color: 'gray'}]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(resultApi.bitcoin.foxbit.last * resultApi.currencies.USD.buy)}
              </Text>
            </View>

            <Text style={[styles.txt, {color: 'gray'}]}>Foxbit</Text>
          </View>

          {/**------------------------------ */}

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>BTC</Text>
                {resultApi.bitcoin.mercadobitcoin.variation >= 0 ? (
                  <Text style={[styles.txt, {color: '#C6DE41'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#C6DE41"/> : (
                      <>
                        <AntDesign name="arrowup" size={11} color="#C6DE41" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(resultApi.bitcoin.mercadobitcoin.variation / 100)}
                      </>
                    )}
                  </Text>
                ) : (
                  <Text style={[styles.txt, {color: '#d55e38'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#d55e38"/> : (
                      <>
                        <AntDesign name="arrowdown" size={11} color="#d55e38" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(resultApi.bitcoin.mercadobitcoin.variation / 100)}
                      </>
                    )}
                  </Text>
                )}
            </View>

            <View>
              <Text style={[styles.txt, {fontSize: 16}]}>
                {Intl.NumberFormat('en', { 
                  style: 'currency', 
                  currency: 'USD'
                }).format(resultApi.bitcoin.mercadobitcoin.buy)}
              </Text>

              <Text style={[styles.txt, {color: 'gray'}]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(resultApi.bitcoin.mercadobitcoin.buy * resultApi.currencies.USD.buy)}
              </Text>
            </View>

            <Text style={[styles.txt, {color: 'gray'}]}>Mercado Bitcoin</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    width: 35,
    height: 35,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    height: 125,
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