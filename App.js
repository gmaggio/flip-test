import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { DataContext, DataUpdateContext } from './src/context/DataContext'
import Navigation from './src/navigation'

export default function App () {
  const [selectedData, setSelectedData] = useState()

  function saveSelectedData (data) {
    setSelectedData(data)
  }

  return (
    <DataContext.Provider value={selectedData}>
      <DataUpdateContext.Provider value={saveSelectedData}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </DataUpdateContext.Provider>
    </DataContext.Provider>
  )
}
