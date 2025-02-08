import { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import tw from "twrnc";
import Message from "./Components/message";
import initialMessages from "./Components/message.json"; // Import JSON data
// import ReceiveMessage from "./Components/recieve_message";
import Feather from "react-native-vector-icons/Feather";
export default function Index() {
  const [messages, setMessages] = useState<
    {
      content: string;
      timestamp: string;
      sender: string;
    }[]
  >(initialMessages);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      const userMessage = {
        content: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sender: "user1",
      };

      setMessages((prevMessages: any) => [
        ...prevMessages,
        userMessage,
      ]);
      setInput("");

      setTimeout(() => {
        const aiMessage = {
          content: generateAIResponse(input),
          time: new Date().toLocaleTimeString(
            [],
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          ),
          username: "AI",
        };
        setMessages((prevMessages: any) => [
          ...prevMessages,
          aiMessage,
        ]);
      }, 1000);
    }
  };

  const generateAIResponse = (
    userInput: string
  ): string => {
    const responses = [
      "That's interesting!",
      "Tell me more!",
      "I see what you mean.",
      "I'm here to chat!",
      "What do you think about that?",
      "Let's talk about something fun!",
    ];
    return responses[
      Math.floor(Math.random() * responses.length)
    ];
  };

  return (
    <View style={tw`flex-1 bg-[#FAF3E9] p-4`}>
      <FlatList
        data={messages}
        keyExtractor={(_, index) =>
          index.toString()
        }
        renderItem={({ item }) => (
          <Message
            content={item.content}
            timestamp={item.timestamp}
            sender={item.sender}
            theme='light'
          />
        )}
        style={tw`flex-1 w-full`}
      />

      <View
        style={tw`flex-row items-center  rounded-lg  w-full mt-2 `}>
        <TextInput
          style={tw`flex-1 text-black overflow-hidden outline-none bg-[#F6E6D6] rounded-3xl px-5 py-4 m-2 placeholder:text-green-500`}
          placeholder='Type your message...'
          placeholderTextColor={tw.color(
            "green-800"
          )}
          value={input}
          onChangeText={setInput}
        />

        <TouchableOpacity
          onPress={sendMessage}
          style={tw`bg-[#ECCDAF] px-4 py-4 rounded-full`}>
          <Feather
            name='send'
            size={20}
            color='black'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
