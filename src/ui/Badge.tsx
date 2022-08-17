import React from "react"
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import AppText from "./AppText"
import { AppFonts, globalStyles } from '../styles/globalStyles';

export type BadgeProps = {
  label: string,
  color?: string,
}

export const Badge = (props: BadgeProps & {
  type: 'filled' |
  'outline'
}) => {
  var _color = props.color ?? '#000'

  var _layoutStyle: StyleProp<ViewStyle> = {
    backgroundColor: props.type === 'filled' ? _color : undefined,
    borderWidth: props.type === 'outline' ? 1 : undefined,
    borderColor: props.type === 'outline' ? props.color : undefined,
  }

  var _textStyle: StyleProp<TextStyle> = {
    color: props.type === 'filled' ? '#fff' : globalStyles.textStyles.color,
  }

  return (
    <View style={[styles.layout, _layoutStyle]}>
      <AppText style={[styles.textStyle, _textStyle]}>{props.label}</AppText>
    </View>
  )
}

export const AppBadge = {
  Filled: (props: BadgeProps) => (
    <Badge {...props} type={'filled'} />
  ),
  Outline: (props: BadgeProps) => (
    <Badge {...props} type={'outline'} />
  )
}
export default AppBadge

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  textStyle: {
    fontFamily: AppFonts.bold,
    fontSize: 12,
  },
})
