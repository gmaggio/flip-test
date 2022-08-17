import {
  StyleSheet
} from 'react-native'

class FontFamily {
  public regular: string
  public bold: string

  constructor({
    regular,
    bold
  }) {
    this.regular = regular
    this.bold = bold
  }
}

export const AppFonts = new FontFamily({
  regular: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',
})

export const globalStyles = StyleSheet.create({
  textStyles: {
    color: '#070707',
    fontSize: 14,
    fontFamily: AppFonts.regular,

    bold: {
      fontFamily: AppFonts.bold,
    },
  },
})
