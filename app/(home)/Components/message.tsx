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
    <View style={tw`bg-gray-200 p-3 rounded-lg shadow-md my-2 max-w-[75%] self-end`}>
      <Text style={tw`text-blue-600 font-semibold`}>{username}</Text>
      <Text style={tw`text-black break-words`}>{content}</Text>
      <Text style={tw`text-xs text-gray-500 text-right mt-2`}>{time}</Text>
    </View>
  );
};

export default Message;
