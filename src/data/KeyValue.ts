export default class KeyValue<K, V> {
  public key: K
  public value: V

  constructor({
    key,
    value,
  }: {
    key: K,
    value: V,
  }) {
    this.key = key
    this.value = value
  }
}
