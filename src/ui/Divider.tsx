import React from "react"
import { StyleSheet, View } from "react-native"
import AppText from "./AppText"
import { AppFonts } from '../styles/globalStyles';

const Divider = (props: {
  label: string,
  backgroundColor?: string,
  borderColor?: string,
}) => {
  return (
    <View style={styles.layout} />
  )
}

export default Divider

const styles = StyleSheet.create({
  layout: {},
  textStyle: {
    color: 'red',
    fontFamily: AppFonts.bold,
  },
})
