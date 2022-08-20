import type { descriptorT, keyT, MutatorT, primalObjT } from './Types';
export default class Mutator implements MutatorT {
    /**
     * @type boolean
     */
    protected isExtensible: boolean;
    [key: keyT]: unknown;
    /**
     * Construct given object to be listenable
     * @param {primalObjT} primalObj
     * @param {boolean} isExtensible
     */
    constructor(primalObj: primalObjT, isExtensible?: boolean);
    /**
     * Add new listenable property to $self
     * @param {keyT} key
     * @param {descriptorT} descriptorT
     */
    add(key: keyT, descriptorT: descriptorT): void;
    /**
     * Couple given listeners with acessor/mutator and assign to the given property ($key)
     * @param {keyT} key
     * @param {descriptorT} descriptor
     */
    protected makePropertyWatchable(key: keyT, descriptor: descriptorT): void;
}
//# sourceMappingURL=Mutator.d.ts.map