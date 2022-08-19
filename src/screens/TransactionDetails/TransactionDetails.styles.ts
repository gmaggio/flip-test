import { StyleSheet } from 'react-native';

import { appTheme } from '../../styles/appTheme';

export const trxDetailsStyles = StyleSheet.create({
  // Page

  pageLayout: {
    backgroundColor: appTheme.colors.background,
    marginTop: 24,
    flex: 1,
  },

  // sections

  sectionLayout: {
    backgroundColor: appTheme.colors.surface,
    paddingHorizontal: 22,
    paddingVertical: 26,
  },
  trxIdSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trxIdButton: {
    marginTop: -10,
    marginBottom: -10,
    paddingVertical: 10,
    paddingRight: 10,
  },
  headingSection: {
    flexDirection: 'row',
  },
  detailsSection: {},
  detailsTitle: {},
  detailsData: {},
})
