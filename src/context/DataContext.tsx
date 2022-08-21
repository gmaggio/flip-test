import React from 'react'

import { TransactionData } from '../screens/TransactionList/TransactionList.types'

const DataContext = React.createContext<TransactionData | undefined>(undefined)

const DataUpdateContext = React.createContext<
  ((data: TransactionData) => void) | undefined
>(undefined)

export { DataContext, DataUpdateContext }
