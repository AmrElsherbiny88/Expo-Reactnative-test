import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

interface MessageProps {
  content: string;
  time: string;
  username: string;
}

const Message: React.FC<MessageProps> = ({ content, time, username }) => {
  return (
    <View style={tw`bg-green-800 p-3 rounded-tr-xl rounded-tl-xl rounded-bl-xl   my-2 max-w-[75%] self-end`}>
      {/* <Text style={tw`text-blue-600 font-semibold`}>{username}</Text> */}
      <Text style={tw`text-white break-words`}>{content}</Text>
      <Text style={tw`text-xs text-green-100 text-left  mt-1`}>{time}</Text>
    </View>
  );
};

export default Message;
