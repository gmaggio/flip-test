import React from 'react'
import { View } from 'react-native'

/**
 * A space that divides elements.
 * @param props.type The divider type to implement.
 * @param [props.width] The width of the divider.
 * @param [props.height] The height of the divider.
 * @param [props.color] The color of the divider.
 */
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

/**
 * A space that divides elements according the given axis direction.
 */
const Divider = {
  /**
   * A space that divides elements in the x-axis direction.
   * @param [props.size] The width of the divider.
   * @param [props.color] The color of the divider.
   */
  H: (props: { size?: number; color?: string }) => (
    <_Divider type='horizonal' width={props.size} color={props.color} />
  ),

  /**
   * A space that divides elements in the y-axis direction.
   * @param [props.size] The height of the divider.
   * @param [props.color] The color of the divider.
   */
  V: (props: { size?: number; color?: string }) => (
    <_Divider type='vertical' height={props.size} color={props.color} />
  ),
}
export default Divider
