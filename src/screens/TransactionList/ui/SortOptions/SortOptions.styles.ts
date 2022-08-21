import { StyleSheet } from 'react-native';

import { appTheme } from '../../../../styles/appTheme';

export const sortOptionsStyles = StyleSheet.create({
  sortOptionsList: {
    paddingHorizontal: 0,
    paddingVertical: 20
  },
  sortOptionsItem: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortOptionsLabel: {
    fontFamily: appTheme.texts.bold,
    fontSize: appTheme.texts.sizeLarge,
    flexGrow: 1
  },
  sortOptionsSwitch: {
    width: 16,
    height: 16,
    marginRight: 10,
    borderColor: appTheme.colors.red,
    borderWidth: 2,
    borderRadius: 13,
  },
  sortOptionsSwitchActive: {
    width: 10,
    height: 10,
    margin: 1,
    backgroundColor: appTheme.colors.red,
    borderRadius: 6,
  }
})
