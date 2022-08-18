import {
  StyleSheet
} from 'react-native'

class appColors{
  // Swatches
  static black= '#070707';
  static gray= '#b0b0b0';
  static grayLight= '#f5f9f8';
  static white= '#fff';
  static green= '#56b686';
  static red = '#f9663b';

  // Texts
  static textPrimary = this.black;
  static textSubtle = this.gray;
  static textOnDark = this.white;

  // Surfaces
  static surface =this.white;
  static background = this.grayLight;

  // Status
  static success = this.green;
  static danger = this.red;
}

const appFonts = {
  // Weights
  regular: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',

  // Sizes
  sizePrimary: 14,
  sizeSecondary: 12,
  sizeLarge: 16,
}

const appLayout = {
  // Radius
  radiusPrimary: 6,
  radiusSmall: 4,
}

export const appTheme = {
  colors: appColors,
  fonts: appFonts,
  layout: appLayout,
}

export const appStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    color: appColors.textPrimary,
    fontSize: appFonts.sizePrimary,
    fontFamily: appFonts.regular,

    bold: {
      fontFamily: appFonts.bold,
    },
  },
})
