import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import tw from 'twrnc';
export default function index() {
  return (
<View>
    <Text style={tw`text-white`}>amoryyy</Text>
    <Link href="/test" style={tw`text-white`}>Go to test</Link>
</View>
  );
}