import React from 'react'
import { Modal, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

import { appTheme } from '../styles/appTheme'

/**
 * The modal window that is styled for this app.
 * @param [props.children] The content of the modal window.
 * @param props.visible The visibility state of the modal window.
 * @param props.onClose Callback that is called when the modal window is hidden.
 * @param [props.style] The styles given to the modal window element.
 */
const ModalBox = (props: {
  children?: React.ReactNode
  visible: boolean
  onClose: () => void
  style?: StyleProp<ViewStyle>
}) => (
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
      <View style={[styles.modalLayout, props.style]}>{props.children}</View>
    </View>
  </Modal>
)
export default ModalBox

// STYLES

const styles = StyleSheet.create({
  modalOverlay: {
    ...appTheme.styles.centeredView,
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
