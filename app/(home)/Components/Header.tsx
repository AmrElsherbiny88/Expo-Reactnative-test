import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  return (
    <View style={tw`flex flex-row justify-between px-3 py-2 items-center `}>
   
      <View>
        <Text style={tw`text-lg font-bold text-black`}>Amoory</Text>
        <Text style={tw`text-md text-[#5C9777]`}>Your Family AI Assistant</Text>
      </View>

  <View>
    
  <TouchableOpacity style={tw`bg-[#D6F5E6] px-3 py-3 rounded-full `} onPress={() => alert('bar clicked!')}>
        <FontAwesome5 name="bars" size={20} color="black" solid />
      </TouchableOpacity>
  </View>
    </View>
  );
};

export default Header;
