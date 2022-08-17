import React from "react"
import { View } from "react-native"

const Divider = (props: {
  height: number,
}) => {
  return (
    <View style={{ height: props.height }} />
  )
}

export default Divider
