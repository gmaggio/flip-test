import React from "react"
import { Text, TextProps } from "react-native"
import { appStyles } from '../styles/appStyles'

const AppText = (props: TextProps) => {

  return (
    <Text {...props} style={[
      appStyles.textStyles,
      props.style,
    ]} />
  )
}

export default AppText
