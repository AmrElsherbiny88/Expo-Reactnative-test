import { Stack } from 'expo-router'
import React from 'react'
import Header from './Components/Header'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen  name="index" options={{headerStyle:{
          backgroundColor: '#FAF3E9'
        } , 
        headerTitle:() => <Header /> 
        
        }} />
        <Stack.Screen  name="test"  />
    </Stack>
  )
}

export default _layout