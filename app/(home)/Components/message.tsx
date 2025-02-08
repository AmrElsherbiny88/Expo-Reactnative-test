import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

interface MessageProps {
  content: string;
  timestamp: string;
  sender: string;
  theme: "light" | "dark";
}

const Message: React.FC<MessageProps> = ({
  content,
  timestamp,
  sender,
  theme = "dark",
}) => {
  const isCurrentUser = sender === "user1"; //sender === currentUsers
  const isAssistant = sender === "assistant";

  const containerStyle = tw`
    p-3 rounded-tr-xl rounded-tl-xl my-2 max-w-[75%]
    ${isCurrentUser ? "self-end" : "self-start"}
    ${
      theme === "light"
        ? isCurrentUser
          ? "bg-green-500"
          : isAssistant
          ? "bg-gray-300"
          : "bg-white"
        : isCurrentUser
        ? "bg-green-700"
        : isAssistant
        ? "bg-gray-700"
        : "bg-black"
    }
  `;

  const textStyle = tw`
    ${
      theme === "light"
        ? isCurrentUser || isAssistant
          ? "text-white"
          : "text-black"
        : "text-white"
    }
  `;

  const timestampStyle = tw`
    text-xs mt-1 ${
      theme === "light"
        ? "text-gray-600"
        : "text-gray-400"
    }
  `;

  return (
    <View style={containerStyle}>
      {!isCurrentUser && !isAssistant && (
        <Text
          style={tw`text-sm font-bold mb-1 ${
            theme === "light"
              ? "text-blue-600"
              : "text-blue-300"
          }`}>
          {sender}
        </Text>
      )}
      <Text style={[textStyle, tw`break-words`]}>
        {content}
      </Text>
      <Text style={timestampStyle}>
        {timestamp}
      </Text>
    </View>
  );
};

export default Message;
