import React from 'react'
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'

import { appTheme } from '../styles/appTheme'
import AppText from './AppText'

export type BadgeTypes = 'filled' | 'outline'

/**
 * @param {BadgeTypes} type The type of badge.
 * @param {string} label The text to be displayed inside the badge.
 * @param {string} [color] The color applied to the badge depending on the badge type.
 */
export type BadgeProps = {
  type: BadgeTypes
  label: string
  color?: string
}

/**
 * A badge typically used to indicate a status with distinguishable color.
 * @param {BadgeProps} props The badge props
 */
const Badge = (props: BadgeProps) => {
  const _color = props.color ?? appTheme.colors.gray

  const _layoutStyle: StyleProp<ViewStyle> = {
    backgroundColor: props.type === 'filled' ? _color : undefined,
    borderWidth: props.type === 'outline' ? 1 : undefined,
    borderColor: props.type === 'outline' ? _color : undefined,
  }

  const _textStyle: StyleProp<TextStyle> = {
    color:
      props.type === 'filled'
        ? appTheme.texts.colorOnDark
        : appTheme.texts.colorPrimary,
  }

  return (
    <View style={[styles.layout, _layoutStyle]}>
      <AppText style={[styles.textStyle, _textStyle]}>{props.label}</AppText>
    </View>
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
    fontFamily: appTheme.texts.bold,
    fontSize: appTheme.texts.sizeSecondary,
  },
})
