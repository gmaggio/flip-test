import React from 'react'
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'

import { appStyles, appTheme } from '../styles/appStyles'
import AppText from './AppText'

export type BadgeProps = {
  label: string,
  color?: string,
}

const BaseBadge = (props: BadgeProps & {
  type: 'filled' |
  'outline'
}) => {
  var _color = props.color ?? appTheme.colors.gray

  var _layoutStyle: StyleProp<ViewStyle> = {
    backgroundColor: props.type === 'filled' ? _color : undefined,
    borderWidth: props.type === 'outline' ? 1 : undefined,
    borderColor: props.type === 'outline' ? _color : undefined,
  }

  var _textStyle: StyleProp<TextStyle> = {
    color: props.type === 'filled' ? appTheme.colors.textOnDark : appStyles.textStyles.color,
  }

  return (
    <View style={[styles.layout, _layoutStyle]}>
      <AppText style={[styles.textStyle, _textStyle]}>{props.label}</AppText>
    </View>
  )
}

const Badge = {
  Filled: (props: BadgeProps) => (
    <BaseBadge {...props} type={'filled'} />
  ),
  Outline: (props: BadgeProps) => (
    <BaseBadge {...props} type={'outline'} />
  )
}
export default Badge

// STYLES

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontFamily: appTheme.fonts.bold,
    fontSize: appTheme.fonts.sizeSecondary,
  },
})
