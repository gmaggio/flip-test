import {
  StyleSheet
} from 'react-native'

export class AppColors{
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

export const AppFonts = {
  // Weights
  regular: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',

  // Sizes
  sizePrimary: 14,
  sizeSecondary: 12,
  sizeLarge: 16,
}

export const globalStyles = StyleSheet.create({
  textStyles: {
    color: AppColors.textPrimary,
    fontSize: AppFonts.sizePrimary,
    fontFamily: AppFonts.regular,

    bold: {
      fontFamily: AppFonts.bold,
    },
  },
})
