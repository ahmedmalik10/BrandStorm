import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SideMenuScreen = ({ navigation }) => {
  const handleMenuPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleMenuPress('Shoes')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenuPress('Accessories')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenuPress('Clothing Wear')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      {/* Add more menu items as needed */}
    </View>
  );
};

export default SideMenuScreen;
