import { View, Text, ImageBackground, TouchableOpacity, StatusBar,useState } from 'react-native';
import launchImg from '../assets/capture.jpg';
//import brandImg from '..\assets/Capture.PNG';
import PrimaryButtonComponent from '../components/Buttons/PrimaryButtonComponent';
import SecondaryButtonComponent from '../components/Buttons/SecondaryButtonComponent';

const EntryScreen = ({ route, navigation }) => {
  return (
    <ImageBackground
      resizeMode="stretch"
      className="flex-1"
      //blurRadius={5}
      source={launchImg}>

      <StatusBar backgroundColor="#67B7F4" barStyle="light-content" />

      <TouchableOpacity
        className="mt-8 mb-12 mr-6"
        onPress={() => navigation.navigate('MainScreen')}>

        <Text className="text-xs font-extralight text-white text-right">Skip</Text>
      </TouchableOpacity>
        
        <Text className="text-6xl mt-4 text-white text-center font-extralight">BrandStorm Sporting Lines</Text>
      
          <Text className="text-xl tracking-wider leading-10 mt-5 p-8 pt-1 text-white text-center">
            "Begin your Sports BrainStorming Journey Today"
          </Text>

      <View className="flex-1 justify-end ">
        <View>

          {/* Intro text about */}
          
          <Text className="text-white text-xs font-light p-8 pb-0 text-center mt-2">
          <Text className="font-bold tracking-widest leading-10 ">                                                                </Text>
           <Text className="font-bold tracking-widest leading-10 ">BrandStorm</Text> App will Facilitate you order and select Sporting Wears, Spikes and Accessories
          </Text>
        </View>

        {/* Buttons Log in and Sign up */}
        <View className="mb-10 p-6">
          <PrimaryButtonComponent label="LOGIN" navigation={navigation} screen="LoginScreen" />
          <SecondaryButtonComponent label="SIGNUP" navigation={navigation} border={true} />
          </View>

       
      </View>
    </ImageBackground>
  )
}

export default EntryScreen;
