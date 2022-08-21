export class Formatters {
  /**
   * Fixes the letter case for the name of the bank.
   * If the bank's name is 4 characters or below, it will be converted into uppercase.
   * Otherwise, it will be a title case,
   * @param {string} bankName The name of the bank.
   * @returns {string} The formatted name of the bank.
   */
  static bankFixCase(bankName: string): string {
    let _bankName: string

    if (bankName.length > 4) {
      _bankName = bankName.charAt(0).toUpperCase() + bankName.substring(1).toLowerCase()
    } else {
      _bankName = bankName.toUpperCase()
    }

    return _bankName
  }

  /**
   * Converts currency value into Indonesian currency format.
   * @param {number} value The currency value.
   * @returns {string} The formatted Indonesian currency.
   */
  static currency(value: number): string {
    return 'Rp' + value.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1.');
  }

  /**
   * Formats the date in 'd MMMM YYYY' local format (eg. 5 Juni 2022).
   * @param {string} date The date value in ISO format.
   * @returns {string} The local date in 'd MMMM YYYY' format (eg. 5 Juni 2022).
   */
  static date(date: string): string {
    const _date = new Date(date.replace(' ', 'T'));
    const _options = { year: 'numeric', month: 'long', day: 'numeric' } as any;

    return new Intl.DateTimeFormat('id-ID', _options).format(_date)
  }
}
