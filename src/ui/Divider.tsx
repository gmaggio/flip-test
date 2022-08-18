import React from "react"
import { View } from "react-native"

type DividerProps = {
  width?: number,
  height?: number,
}

const BaseDivider = (props: DividerProps & { type: 'horizonal' | 'vertical' }) => {
  return (
    <View style={{
      width: props.type === 'horizonal' ? props.width : undefined,
      height: props.type === 'vertical' ? props.height : undefined,
    }} />
  )
}

const Divider = {
  H: (props: { value: number }) => (
    <BaseDivider {...props} type={'horizonal'} width={props.value} />
  ),
  V: (props: { value: number }) => (
    <BaseDivider {...props} type={'vertical'} height={props.value} />
  )
}
export default Divider
