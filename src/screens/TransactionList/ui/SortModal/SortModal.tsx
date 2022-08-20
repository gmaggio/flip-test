import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'

import AppText from '../../../../ui/AppText'
import ModalBox from '../../../../ui/ModalBox'
import { SortTypes } from '../../TransactionList.types'
import { sortModalStyles } from './SortModal.styles'

var _styles = sortModalStyles

export const SortLabels = {
  sort: 'URUTKAN',
  alphaAsc: 'Nama A-Z',
  alphaDesc: 'Nama Z-A',
  newest: 'Tanggal Terbaru',
  oldest: 'Tanggal Terlama',
}

const SortModal = (props: {
  value: SortTypes
  visible: boolean
  onSelect: (value: SortTypes) => void
  onClose: () => void
}) => {
  return (
    <ModalBox
      visible={props.visible}
      onClose={props.onClose}
      style={_styles.sortOptionsList}
    >
      {Object.keys(SortLabels).map((item) => (
        <TouchableNativeFeedback
          key={item}
          onPress={() => props.onSelect(item as SortTypes)}
        >
          <View style={_styles.sortOptionsItem}>
            <View style={_styles.sortOptionsSwitch}>
              {props.value === item ? (
                <View style={_styles.sortOptionsSwitchActive} />
              ) : null}
            </View>
            <AppText style={_styles.sortOptionsLabel}>
              {SortLabels[item]}
            </AppText>
          </View>
        </TouchableNativeFeedback>
      ))}
    </ModalBox>
  )
}
export default SortModal
