import type { descriptorT, keyT, MutatorT, primalObjT } from './Types';

export default class Mutator implements MutatorT {
  /**
   * @type boolean
   */
  protected isExtensible = true;
  [key: keyT]: unknown;

  /**
   * Construct given object to be listenable
   * @param {primalObjT} primalObj
   * @param {boolean} isExtensible
   */
  constructor(primalObj: primalObjT, isExtensible = false) {
    Object.keys(primalObj).forEach((key) => {
      const descriptor = primalObj[key] as descriptorT;
      this.add(key, descriptor);
    });
    this.isExtensible = isExtensible;
  }

  /**
   * Add new listenable property to $self
   * @param {keyT} key
   * @param {descriptorT} descriptorT
   */
  add(key: keyT, descriptorT: descriptorT) {
    if (!this.isExtensible) {
      throw 'Adding new property to a unexpendable Mutator.';
    }
    this.makePropertyWatchable(key, descriptorT);
  }

  /**
   * Couple given listeners with acessor/mutator and assign to the given property ($key)
   * @param {keyT} key
   * @param {descriptorT} descriptor
   */
  protected makePropertyWatchable(key: keyT, descriptor: descriptorT): void {
    const privateKey: keyT = `#${key}`;
    Object.defineProperty(this, key, {
      enumerable: true,
      configurable: false,
      get() {
        const value = this[privateKey];
        descriptor.onAccess?.(key, value);
        return value;
      },
      set(newVal) {
        this[privateKey] = newVal;
        descriptor.onChange?.(key, this[privateKey], newVal);
      },
    });
    this[key] = descriptor.value;
  }
}
