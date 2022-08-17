import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TransactionList from '../screens/TransactionList'
import TransactionDetails from '../screens/TransactionDetails'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='transaction-list'
          component={TransactionList}
        />
        <Stack.Screen
          name='transaction-details'
          component={TransactionDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
