import React from 'react'

import { TransactionData } from '../screens/TransactionList/TransactionList.types'

export const DataContext = React.createContext<TransactionData | null>(null)
export const DataUpdateContext = React.createContext<(data: TransactionData) => void>((data: TransactionData) => { })
