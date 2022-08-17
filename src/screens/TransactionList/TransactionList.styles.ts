import { StyleSheet } from 'react-native'
import { globalStyles, AppFonts } from '../../styles/globalStyles';

export const trxListStyles = StyleSheet.create({
  searchBar: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  pageLayout: {
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
  badge: {},
})
