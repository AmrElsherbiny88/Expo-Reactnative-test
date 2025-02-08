import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen  name="index" options={{headerStyle:{
          backgroundColor: 'black'
        } , 
        headerTitle:"Chat App" 
        
        }} />
        <Stack.Screen  name="test"  />
    </Stack>
  )
}

export default _layout