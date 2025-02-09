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
  theme,
}) => {
  const isCurrentUser = sender === "user1"; //sender === currentUsers
  const isAssistant = sender === "assistant";

  const containerStyle = tw`
    p-3 rounded-tr-xl rounded-tl-xl my-2 max-w-[75%]
    ${isCurrentUser ? "self-end" : "self-start"}
    ${
      theme === "light"
        ? isCurrentUser
          ? "bg-[#29A46B]"
          : isAssistant
          ? "bg-[#EFEFEF]"
          : "border border-[#29A46B]"
        : isCurrentUser
        ? "bg-[#29A46B] bg-opacity-20"
        : isAssistant
        ? "bg-[#EFEFEF] bg-opacity-10"
        : "border border-[#29A46B] border-opacity-20"
    }
  `;

  const textStyle = tw`
    ${
      theme === "light"
        ? isCurrentUser
          ? "text-white"
          : "text-black"
        : "text-white"
    }
  `;

  const timestampStyle = tw`
    text-xs mt-1 ${
      theme === "light"
        ? isCurrentUser
          ? "text-white"
          : "text-black"
        : "text-white"
    }
  `;

  return (
    <>
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
      <View style={containerStyle}>
        <Text
          style={[textStyle, tw`break-words`]}>
          {content}
        </Text>
        <Text style={timestampStyle}>
          {timestamp}
        </Text>
      </View>
    </>
  );
};

export default Message;
