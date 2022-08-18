import React from 'react'
import { Text, TextProps } from 'react-native'

import { appTheme } from '../styles/appTheme'

const AppText = (props: TextProps) => {

  return (
    <Text {...props} style={[
      appTheme.styles.textStyles,
      props.style,
    ]} />
  )
}

export default AppText
