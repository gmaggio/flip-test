import React from 'react'
import { View } from 'react-native'

type DividerProps = {
  width?: number
  height?: number
  color?: string
}

const BaseDivider = (
  props: DividerProps & { type: 'horizonal' | 'vertical' },
) => {
  return (
    <View
      style={{
        backgroundColor: props.color,
        width: props.type === 'horizonal' ? props.width : undefined,
        height: props.type === 'vertical' ? props.height : undefined,
      }}
    />
  )
}

const Divider = {
  H: (props: { size?: number; color?: string }) => (
    <BaseDivider
      {...props}
      type={'horizonal'}
      width={props.size ?? 4}
      color={props.color}
    />
  ),
  V: (props: { size?: number; color?: string }) => (
    <BaseDivider
      {...props}
      type={'vertical'}
      height={props.size ?? 4}
      color={props.color}
    />
  ),
}
export default Divider
