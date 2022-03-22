import React, { useEffect } from "react";
import LottieView from 'lottie-react-native';
import { View } from "react-native";
import { userApi, userIsLoading } from "../../context";
import loadingAnimation from '../../assets/animations/loading.json';

const Lottie = () => {
  const { setResultApi } = userApi();
  const { setIsLoading } = userIsLoading();

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
        setTimeout(() => {setIsLoading(true)},2000)
      }
    });
  }
  useEffect(() => {callApi()},[])

  return (
    <View style={{
      width: '100%', 
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <LottieView
        style={{
          height: 250,
          alignSelf: 'center',
        }}
        autoPlay
        loop
        autoSize
        resizeMode="cover"
        source={loadingAnimation}
      />
    </View>
  )
}

export default Lottie;