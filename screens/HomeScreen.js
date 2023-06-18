import { ScrollView, View } from 'react-native';
import React from 'react';
import InputComponent from '../components/InputComponent';
import CategoryFlatList from '../components/CategoryFlatList';
import GetApiCustomHook from '../components/CustomHooks/GetApiCustomHook';
import GetWearCustomHook from '../components/CustomHooks/GetWearCustomHook';
import GetAccCustomHook from '../components/CustomHooks/GetAccCustomHook';

const HomeScreen = () => {
  const [Shoes] = GetApiCustomHook()
  const [Wears] = GetWearCustomHook()
  const [accessories] = GetAccCustomHook()

  return (
    <ScrollView>
      <View className="flex-1">
        <InputComponent icon={"search"} placeholder="search item"/>
        <View>
          <CategoryFlatList data={Shoes} title={"Sports Shoes"} description={"Spikes Fleets Tracks"} />
        </View>
        <View>
          <CategoryFlatList data={Wears} title={"Sports Wears"} description={"Game Traaining Workout Wear"}   />
        </View>
        <View>
          <CategoryFlatList data={accessories} title={"Sports Accessories"} description={"Sporting Kits Bags Items"}  />
        </View>
        
      </View>
    </ScrollView>
  );
}

export default HomeScreen
