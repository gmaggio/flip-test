import { StyleSheet } from 'react-native'
import { appTheme, appStyles } from '../../styles/appStyles'

export const trxListStyles = StyleSheet.create({
  // Page

  pageLayout: {
    backgroundColor: appTheme.colors.background,
    flex: 1,
  },

  // Search Bar

  searchBar: {
    backgroundColor: appTheme.colors.surface,
    paddingHorizontal: 14,
    paddingVertical: 20,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  searchBarField: {
    ...appStyles.textStyles,
    fontSize: 12,
    padding: 0,
    margin: 0,
    flexGrow: 1,
    flexShrink: 1,
  },
  searchBarButton: {
    padding: 0,
    margin: 0,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  searchBarButtonText: {
    color: appTheme.colors.red,
    fontFamily: appTheme.fonts.bold,
    fontSize: 12,
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
    fontFamily: appTheme.fonts.bold,
    fontSize: appTheme.fonts.sizeLarge,
  },
  listDescription: {
    marginTop: 2,
  },
  listSubDescription: {
    fontSize: appTheme.fonts.sizeSecondary,
    marginTop: 2,
  },
})
