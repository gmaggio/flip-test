import { StyleSheet } from 'react-native';

import { appTheme } from '../../styles/appTheme';

export const trxListStyles = StyleSheet.create({
  // Page
  pageBlank: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageLayout: {
    backgroundColor: appTheme.colors.background,
    flex: 1,
  },

  // Error
  errorTitle: {
    color: appTheme.colors.gray,
    fontFamily: appTheme.texts.bold,
    fontSize: appTheme.texts.sizeLarge,
    marginTop: 10,
  },
  errorDescription: {
    color: appTheme.colors.gray,
    fontFamily: appTheme.texts.bold,
    marginTop: 4,
  },

  // Search Bar
  searchBar: {
    backgroundColor: appTheme.colors.surface,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarFieldSection: {
    paddingVertical: 18,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
  },
  searchBarField: {
    ...appTheme.styles.textStyles,
    fontSize: appTheme.texts.sizePrimary,
    padding: 0,
    marginLeft: 6,
    flexGrow: 1,
    flexShrink: 1,
  },
  searchButton: {
    marginRight: -8,
  },

  // List
  listLayout: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  listItem: {
    backgroundColor: appTheme.colors.surface,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 10,
    borderRadius: 6,
    borderLeftWidth: 6,
    borderLeftColor: appTheme.colors.black,
    flexDirection: 'row',
    alignItems: 'center',

    empty: {
      backgroundColor: appTheme.colors.grayLightVariant,
      borderLeftColor: appTheme.colors.gray,
    },
  },
  listDetails: {
    marginRight: 12,
    flexGrow: 1,
  },
  listTitle: {
    fontFamily: appTheme.texts.bold,
    fontSize: appTheme.texts.sizeLarge,
  },
  listDescription: {
    marginTop: 2,
  },
  listSubDescription: {
    fontSize: appTheme.texts.sizeSecondary,
    marginTop: 2,
  },
})
