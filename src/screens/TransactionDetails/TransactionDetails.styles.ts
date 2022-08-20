import { StyleSheet, Modal } from 'react-native';

import { appTheme } from '../../styles/appTheme';

export const trxDetailsStyles = StyleSheet.create({
  // Page
  pageLayout: {
    backgroundColor: appTheme.colors.background,
    marginTop: 24,
    flex: 1,
  },

  // Sections
  sectionLayout: {
    backgroundColor: appTheme.colors.surface,
    paddingHorizontal: 22,
    paddingVertical: 24,
  },

  // Trx ID Section
  trxIdSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trxIdText: {
    fontFamily: appTheme.texts.bold,
  },
  tappable: {
    marginTop: -10,
    marginBottom: -10,
    paddingVertical: 10,
    paddingRight: 10,
  },

  // Heading Section
  headingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingText: {
    fontFamily: appTheme.texts.bold,

  },
  headingButton: {
    marginTop: -10,
    marginBottom: -10,
    marginRight: -8,
  },

  // Details Section
  detailsSection: {},
  detailsTitle: {
    fontSize: appTheme.texts.sizeLarge,
    fontFamily: appTheme.texts.bold,
    marginBottom: 20,
  },
  detailsDataSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detailsData: {
    marginBottom: 28,

    odd: {
      width: '42%',
    },

    even: {
      width: '42%',
      marginLeft: '16%',
      flexGrow: 0,
      flexShrink: 1,
    },

    isLast: {
      marginBottom: 0,
    },
  },
  detailsDataKey: {
    fontFamily: appTheme.texts.bold,
  },
  detailsDataValue: {},
})
