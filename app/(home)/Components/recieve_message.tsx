import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

interface ReceiveMessageProps {
  content: string;
  time: string;
  username: string;
}

const ReceiveMessage: React.FC<ReceiveMessageProps> = ({ content, time, username }) => {
  return (
<View>
      <View>
         <Text style={tw`text-green-700 font-semibold`}>{username}</Text>
      </View>
      <View style={tw`bg-white p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl shadow-md my-2 max-w-[80%] self-start`}>
       
        <Text style={tw`text-green-900 break-words`}>{content}</Text>
        <Text style={tw`text-xs text-green-700 text-left mt-1`}>{time}</Text>
      </View>
</View>
  );
};

export default ReceiveMessage;
