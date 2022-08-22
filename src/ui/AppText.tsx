import React from 'react'
import { Text, TextProps } from 'react-native'

import { appTheme } from '../styles/appTheme'

/**
 * The text that is styled for this app.
 * @param props The text props.
 */
const AppText = (props: TextProps) => (
  <Text {...props} style={[appTheme.styles.textStyles, props.style]} />
)

export default AppText
