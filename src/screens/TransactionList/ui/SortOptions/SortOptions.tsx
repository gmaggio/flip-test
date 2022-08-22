import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native'

import AppText from '../../../../ui/AppText'
import ModalBox from '../../../../ui/ModalBox'
import { sortOptionsStyles } from './SortOptions.styles'

const _styles = sortOptionsStyles

export enum SortTypes {
  sort = 'sort',
  alphaAsc = 'alphaAsc',
  alphaDesc = 'alphaDesc',
  newest = 'newest',
  oldest = 'oldest',
}

export const SortLabels = {
  sort: 'URUTKAN',
  alphaAsc: 'Nama A-Z',
  alphaDesc: 'Nama Z-A',
  newest: 'Tanggal Terbaru',
  oldest: 'Tanggal Terlama',
}

/**
 * The modal window for the sort options.
 * @param props.value The current active type of sorting.
 * @param props.visible The visibility state of the modal window.
 * @param props.onSelect Callback that is called when the sort option is selected.
 * @param props.onClose Callback that is called when the modal window is hidden.
 */
const SortOptions = (props: {
  value: SortTypes
  visible: boolean
  onSelect: (value: SortTypes) => void
  onClose: () => void
}) => (
  <ModalBox
    visible={props.visible}
    onClose={props.onClose}
    style={_styles.sortOptionsList}
  >
    {Object.keys(SortTypes).map((item) => (
      <TouchableNativeFeedback
        key={item}
        onPress={() => props.onSelect(SortTypes[item])}
      >
        <View style={_styles.sortOptionsItem}>
          <View style={_styles.sortOptionsSwitch}>
            {props.value === item && (
              <View style={_styles.sortOptionsSwitchActive} />
            )}
          </View>
          <AppText style={_styles.sortOptionsLabel}>{SortLabels[item]}</AppText>
        </View>
      </TouchableNativeFeedback>
    ))}
  </ModalBox>
)
export default SortOptions
