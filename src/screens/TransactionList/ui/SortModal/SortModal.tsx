import React from "react"
import { TouchableOpacity, View } from "react-native"
import AppText from "../../../../ui/AppText"
import ModalBox from "../../../../ui/ModalBox"
import { SortTypes } from "../../TransactionList.types"
import { sortModalStyles } from "./SortModal.styles"


export const SortLabels = {
  sort: 'URUTKAN',
  alphaAsc: 'Nama A-Z',
  alphaDesc: 'Nama Z-A',
  newest: 'Tanggal Terbaru',
  oldest: 'Tanggal Terlama',
}

const SortModal = (props: {
  value: SortTypes,
  visible: boolean,
  onSelect: (value: SortTypes) => void,
  onClose: () => void,
}) => {
  return (
    <ModalBox
      visible={props.visible}
      onClose={props.onClose}
      style={sortModalStyles.sortOptionsList}
    >
      {
        Object.keys(SortLabels).map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => props.onSelect(item as SortTypes)}
            activeOpacity={.5}
          >
            <View style={sortModalStyles.sortOptionsItem}>
              <View style={sortModalStyles.sortOptionsSwitch}>
                {props.value === item ?
                  <View style={sortModalStyles.sortOptionsSwitchActive} /> : null}
              </View>
              <AppText style={sortModalStyles.sortOptionsLabel}>
                {SortLabels[item]}
              </AppText>
            </View>
          </TouchableOpacity>
        ))
      }
    </ModalBox >
  )
}
export default SortModal
