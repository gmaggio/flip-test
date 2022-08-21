import React from 'react'
import { View } from 'react-native'

const _Divider = (props: {
  type: 'horizonal' | 'vertical'
  width?: number
  height?: number
  color?: string
}) => {
  const _width = props.type === 'horizonal' ? props.width ?? 4 : undefined
  const _height = props.type === 'vertical' ? props.height ?? 4 : undefined

  return (
    <View
      style={{
        backgroundColor: props.color,
        width: _width,
        height: _height,
      }}
    />
  )
}

const Divider = {
  H: (props: { size?: number; color?: string }) => (
    <_Divider type='horizonal' width={props.size} color={props.color} />
  ),
  V: (props: { size?: number; color?: string }) => (
    <_Divider type='vertical' height={props.size} color={props.color} />
  ),
}
export default Divider
