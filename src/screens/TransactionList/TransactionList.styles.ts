import { StyleSheet } from 'react-native'
import { globalStyles, AppFonts } from '../../styles/globalStyles';

export const trxListStyles = StyleSheet.create({
  // Search Bar

  searchBar: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 20,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  searchBarField: {
    ...globalStyles.textStyles,
    fontSize:12,
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
    color: '#f9663b',
    fontFamily: AppFonts.bold,
    fontSize: 12,
  },

  // List

  listLayout: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  listItem: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingLeft: 18,
    paddingRight: 10,
    borderRadius: 6,
    borderLeftWidth: 8,
    borderLeftColor: '#000',
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  listDetails: {
    marginRight: 12,
    flexGrow: 1,
  },
  listTitle: {
    fontFamily: AppFonts.bold,
    fontSize: 16,
  },
  listDescription: {
    fontSize: 14,
    marginTop: 2,
  },
  listSubDescription: {
    fontSize: 12,
    marginTop: 2,
  },
})
