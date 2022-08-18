import React from "react"
import { Modal, View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { appStyles, appTheme } from "../styles/appStyles"

const ModalBox = (props: {
  children?: React.ReactNode,
  visible: boolean,
  onClose: () => void,
  style?: StyleProp<ViewStyle>,
}) => {
  return (
    <Modal
      animationType='fade'
      statusBarTranslucent={true}
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.onClose()
      }}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalLayout, props.style]}>
          {props.children}
        </View>
      </View>
    </Modal>
  )
}
export default ModalBox

// STYLES

const styles = StyleSheet.create({
  modalOverlay: {
    ...appStyles.centeredView,
    padding: 30,
    backgroundColor: appTheme.colors.black + '88',
    alignItems: 'stretch',
  },
  modalLayout: {
    backgroundColor: appTheme.colors.surface,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: appTheme.layout.radiusPrimary,
    alignItems: 'stretch',
    shadowColor: appTheme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: appTheme.layout.radiusPrimary,
  },
})
