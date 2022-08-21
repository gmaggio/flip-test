import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import TransactionDetails from '../screens/TransactionDetails'
import TransactionList from '../screens/TransactionList'

const Stack = createNativeStackNavigator()

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='TransactionList' component={TransactionList} />
      <Stack.Screen name='TransactionDetails' component={TransactionDetails} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigation
