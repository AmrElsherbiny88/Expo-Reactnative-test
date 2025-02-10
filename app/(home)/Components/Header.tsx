import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Header = () => {
  return (
    <View
      style={tw`flex flex-row justify-between px-3 py-2 items-center min-w-full`}>
      <View style={tw`flex items-center p-3`}>
        <TouchableOpacity
          style={tw`bg-[#D6F5E6] px-3 py-3 rounded-full `}
          onPress={() => alert("back clicked!")}>
          <FontAwesome5
            name='arrow-left'
            size={20}
            color='#29A46B'
            solid
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={tw`text-lg font-bold text-white`}>
          Vicky family aI Assistant
        </Text>
      </View>

      <View style={tw`flex items-center p-3`}>
        <TouchableOpacity
          style={tw`bg-[#D6F5E6] px-3 py-3 rounded-full `}
          onPress={() => alert("bar clicked!")}>
          <FontAwesome5
            name='bars'
            size={20}
            color='#29A46B'
            solid
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
