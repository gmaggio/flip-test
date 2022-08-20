import Clipboard from '@react-native-clipboard/clipboard'
import { ToastAndroid } from 'react-native'

export class Helpers {
  /**
   * Copy text to clipboard.
   * @param {string} text The text to copy to clipboard.
   * @param {string} props.message Optional toast message clarifying the copied text.
   */
  static copyToClipboard(text: string, props?: { message?: string }): void {
    Clipboard.setString(text)
    if (props?.message != null) Helpers.showToast(props?.message)
  }

  /**
   * Display toast with the given message.
   * @param message The message to display in th toast.
   */
  static showToast(message: string): void {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }
}
