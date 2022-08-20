import React from 'react'
import { View } from 'react-native'

const _divider = (props: {
  type: 'horizonal' | 'vertical'
  width?: number
  height?: number
  color?: string
}) => (
  <View
    style={{
      backgroundColor: props.color,
      width: props.type === 'horizonal' ? props.width : undefined,
      height: props.type === 'vertical' ? props.height : undefined,
    }}
  />
)

const Divider = {
  H: (props: { size?: number; color?: string }) =>
    _divider({
      type: 'horizonal',
      width: props.size ?? 4,
      color: props.color,
    }),
  V: (props: { size?: number; color?: string }) =>
    _divider({
      type: 'vertical',
      height: props.size ?? 4,
      color: props.color,
    }),
}
export default Divider
