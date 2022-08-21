import type { descriptorT, keyT, CybObjT, primalObjT } from './Types';
export default class CybObj implements CybObjT {
    /**
     * @type boolean
     */
    protected isExtensible: boolean;
    [key: keyT]: unknown;
    /**
     * Assimilate given object to be listenable
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
    protected assimilateProp(key: keyT, descriptor: descriptorT): void;
}
//# sourceMappingURL=CybObj.d.ts.map