import { StyleSheet } from 'react-native';

import { appTheme } from '../../styles/appTheme';

export const trxListStyles = StyleSheet.create({
  // Page

  pageLayout: {
    backgroundColor: appTheme.colors.background,
    flex: 1,
  },

  // Search Bar

  searchBar: {
    backgroundColor: appTheme.colors.surface,
    paddingLeft: 14,
    paddingRight: 8,
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
    fontSize: appTheme.texts.sizeSecondary,
    padding: 0,
    marginLeft: 6,
    flexGrow: 1,
    flexShrink: 1,
  },

  // List

  listLayout: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  listItem: {
    backgroundColor: appTheme.colors.surface,
    paddingVertical: 12,
    paddingLeft: 18,
    paddingRight: 10,
    borderRadius: 6,
    borderLeftWidth: 8,
    borderLeftColor: appTheme.colors.black,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
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
