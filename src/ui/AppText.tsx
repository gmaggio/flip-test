import React from "react"
import { Text, TextProps } from "react-native"
import { globalStyles, AppFonts } from '../styles/globalStyles';

const AppText = (props: TextProps) => {

  return (
    <Text {...props} style={[
      globalStyles.textStyles,
      props.style,
    ]} />
  )
}

export default AppText
