import React from 'react'
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

import { appTheme } from '../styles/appTheme'
import AppText from './AppText'

export type TappableProps = {
  label: string
  trailing?: (trailingStyle: TappableTrailingStyles) => React.ReactNode
  onTapped: () => void
  style?: StyleProp<ViewStyle>
}

const Tappable = (props: TappableProps) => {
  const _hasLabel: boolean = props.label.length > 0

  return (
    <Pressable onPress={props.onTapped} style={[styles.layout, props.style]}>
      {_hasLabel ? (
        <AppText style={styles.textStyle}>{props.label}</AppText>
      ) : null}
      {props.trailing != null ? (
        <View style={_hasLabel ? styles.trailing : null}>
          {props.trailing(styles.trailing)}
        </View>
      ) : null}
    </Pressable>
  )
}
export default Tappable

// STYLES

type TappableTrailingStyles = {
  color: string
  marginLeft: number
}

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    paddingVertical: 8,
    color: appTheme.colors.red,
    fontFamily: appTheme.texts.bold,
    fontSize: appTheme.texts.sizeSecondary,
  },
  trailing: {
    color: appTheme.colors.red,
    marginLeft: 2,
  },
})
