import { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text, FlatList } from 'react-native';
import tw from 'twrnc';
import Message from './Components/message';
import ReceiveMessage from './Components/recieve_message';

export default function Index() {
  const [messages, setMessages] = useState<{ content: string; time: string; username: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      const userMessage = {
        content: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        username: 'Amr', 
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]); 
      setInput('');

  
      setTimeout(() => {
        const aiMessage = {
          content: generateAIResponse(input),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          username: 'AI', 
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]); 
      }, 1000);
    }
  };

  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "That's interesting!",
      "Tell me more!",
      "I see what you mean.",
      "I'm here to chat!",
      "What do you think about that?",
      "Let's talk about something fun!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <View style={tw`flex-1 bg-black p-4`}>
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) =>
          item.username === 'Amr' ? (
            <Message content={item.content} time={item.time} username={item.username} />
          ) : (
            <ReceiveMessage content={item.content} time={item.time} username={item.username} />
          )
        }
        style={tw`flex-1 w-full`}
      />


      <View style={tw`flex-row items-center bg-white rounded-lg p-2 w-full mt-2`}>
        <TextInput
          style={tw`flex-1 p-2 text-black overflow-hidden outline-none`}
          placeholder="Type here..."
          placeholderTextColor="gray"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={sendMessage} style={tw`bg-blue-500 px-4 py-2 rounded-lg`}>
          <Text style={tw`text-white font-bold`}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
