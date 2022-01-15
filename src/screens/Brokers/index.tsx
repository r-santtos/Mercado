import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { userApi } from "../../context";

export default function Brokers() {

  const [loadingAPI, setLoadingAPI] =useState(true);

  /** CHAMADA API */
  const {setResultApi} = userApi();
  const [dollar, setDollar] = useState(0);

  const [blockchainBuy, setBlockchainBuy] = useState(0);
  const [blockchainVariation, setBlockchainVariation] = useState(0);

  const [coinbaseBuy, setCoinbaseBuy] = useState(0);
  const [coinbaseVariation, setCoinbaseVariation] = useState(0);

  const [bitstampBuy, setBitstampBuy] = useState(0);
  const [bitstampVariation, setBitstampVariation] = useState(0);

  const [foxbitBuy, setFoxbitBuy] = useState(0);
  const [foxbitVariation, setFoxbitVariation] = useState(0);

  const [mercadoBitcoinBuy, setMercadobitcoinBuy] = useState(0);
  const [mercadoBitcoinVariation, setMercadobitcoinVariation] = useState(0);

  useEffect(() => {
    fetch('https://api.hgbrasil.com/finance?key=568a710a')
    .then((response) => {
      return response.json();
    })
    .then(jsonBody => {
      try {
        setResultApi(jsonBody.results);
        setDollar(jsonBody.results.currencies.USD.buy);

        setBlockchainBuy(jsonBody.results.bitcoin.blockchain_info.buy);
        setBlockchainVariation(jsonBody.results.bitcoin.blockchain_info.variation);

        setCoinbaseBuy(jsonBody.results.bitcoin.coinbase.last);
        setCoinbaseVariation(jsonBody.results.bitcoin.coinbase.variation);

        setBitstampBuy(jsonBody.results.bitcoin.bitstamp.buy);
        setBitstampVariation(jsonBody.results.bitcoin.bitstamp.variation);

        setFoxbitBuy(jsonBody.results.bitcoin.foxbit.last);
        setFoxbitVariation(jsonBody.results.bitcoin.foxbit.variation);

        setMercadobitcoinBuy(jsonBody.results.bitcoin.mercadobitcoin.buy);
        setMercadobitcoinVariation(jsonBody.results.bitcoin.mercadobitcoin.variation);
      } catch (error) {
        console.log('API call error')
      } finally {
        setLoadingAPI(false);
      }
    });
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.txt, {fontSize: 24}]}>Corretoras</Text>
        <Text style={[styles.txt, {color: 'gray'}]}>preço do Bitcoin</Text>
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
                {blockchainVariation >= 0 ? (
                  <Text style={[styles.txt, {color: '#C6DE41'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#C6DE41"/> : (
                      <>
                        <AntDesign name="arrowup" size={11} color="#C6DE41" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(blockchainVariation / 100)}
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
                        }).format(blockchainVariation / 100)}
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
                }).format(blockchainBuy)}
              </Text>

              <Text style={[styles.txt, {color: 'gray'}]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(blockchainBuy * dollar)}
              </Text>
            </View>

            <Text style={[styles.txt, {color: 'gray'}]}>Blockchain.info</Text>
          </View>

          {/**------------------------------ */}

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>BTC</Text>
                {coinbaseVariation >= 0 ? (
                  <Text style={[styles.txt, {color: '#C6DE41'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#C6DE41"/> : (
                      <>
                        <AntDesign name="arrowup" size={11} color="#C6DE41" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(coinbaseVariation / 100)}
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
                        }).format(coinbaseVariation / 100)}
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
                }).format(coinbaseBuy)}
              </Text>

              <Text style={[styles.txt, {color: 'gray'}]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(coinbaseBuy * dollar)}
              </Text>
            </View>

            <Text style={[styles.txt, {color: 'gray'}]}>Coinbase</Text>
          </View>

          {/**------------------------------ */}

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>BTC</Text>
                {bitstampVariation >= 0 ? (
                  <Text style={[styles.txt, {color: '#C6DE41'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#C6DE41"/> : (
                      <>
                        <AntDesign name="arrowup" size={11} color="#C6DE41" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(bitstampVariation / 100)}
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
                        }).format(bitstampVariation / 100)}
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
                }).format(bitstampBuy)}
              </Text>

              <Text style={[styles.txt, {color: 'gray'}]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(bitstampBuy * dollar)}
              </Text>
            </View>

            <Text style={[styles.txt, {color: 'gray'}]}>Bitstamp</Text>
          </View>

          {/**------------------------------ */}

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>BTC</Text>
                {foxbitVariation >= 0 ? (
                  <Text style={[styles.txt, {color: '#C6DE41'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#C6DE41"/> : (
                      <>
                        <AntDesign name="arrowup" size={11} color="#C6DE41" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(foxbitVariation / 100)}
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
                        }).format(foxbitVariation / 100)}
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
                }).format(foxbitBuy)}
              </Text>

              <Text style={[styles.txt, {color: 'gray'}]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(foxbitBuy * dollar)}
              </Text>
            </View>

            <Text style={[styles.txt, {color: 'gray'}]}>Foxbit</Text>
          </View>

          {/**------------------------------ */}

          <View style={styles.box}>
            <View style={styles.title}>
              <Text style={[styles.txt, {color: 'gray'}]}>BTC</Text>
                {mercadoBitcoinVariation >= 0 ? (
                  <Text style={[styles.txt, {color: '#C6DE41'}]}>
                    {loadingAPI == true ? <ActivityIndicator size="small" color="#C6DE41"/> : (
                      <>
                        <AntDesign name="arrowup" size={11} color="#C6DE41" />
                        {Intl.NumberFormat('pt-BR', { 
                          style: 'percent',
                          currency: 'BRL',
                          maximumFractionDigits: 4
                        }).format(mercadoBitcoinVariation / 100)}
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
                        }).format(mercadoBitcoinVariation / 100)}
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
                }).format(mercadoBitcoinBuy)}
              </Text>

              <Text style={[styles.txt, {color: 'gray'}]}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(mercadoBitcoinBuy * dollar)}
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