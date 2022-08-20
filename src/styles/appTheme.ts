import {
  StyleSheet
} from 'react-native'

class appColors{
  // Swatches
  static black= '#070707';
  static gray= '#b0b0b0';
  static grayLight= '#f5f9f8';
  static grayLightVariant= '#eeeeee';
  static white= '#fff';
  static green= '#56b686';
  static red = '#f9663b';

  // Surfaces
  static surface =this.white;
  static background = this.grayLight;

  // Status
  static success = this.green;
  static danger = this.red;
}

const appTexts = {
  // Weights
  regular: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',

  // Sizes
  sizePrimary: 12,
  sizeSecondary: 11,
  sizeLarge: 14,

  // Colors
  colorPrimary: appColors.black,
  colorSubtle: appColors.gray,
  colorOnDark: appColors.white,
}

const appLayout = {
  // Radius
  radiusPrimary: 6,
  radiusSmall: 4,
}

const appStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    color: appTexts.colorPrimary,
    fontSize: appTexts.sizePrimary,
    fontFamily: appTexts.regular,

    bold: {
      fontFamily: appTexts.bold,
    },
  },
})

export const appTheme = {
  colors: appColors,
  texts: appTexts,
  layout: appLayout,
  styles: appStyles,
}
