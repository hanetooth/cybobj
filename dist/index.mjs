/*!
 * cybobj v1.0.0
 * (c) Hein Htut Aung
 * Released under the MIT License.
 */

var CybObj = /** @class */ (function () {
    /**
     * Assimilate given object to be listenable
     * @param {primalObjT} primalObj
     * @param {boolean} isExtensible
     */
    function CybObj(primalObj, isExtensible) {
        if (isExtensible === void 0) { isExtensible = false; }
        var _this = this;
        /**
         * @type boolean
         */
        this.isExtensible = true;
        Object.keys(primalObj).forEach(function (key) {
            var descriptor = primalObj[key];
            _this.add(key, descriptor);
        });
        this.isExtensible = isExtensible;
    }
    /**
     * Add new listenable property to $self
     * @param {keyT} key
     * @param {descriptorT} descriptorT
     */
    CybObj.prototype.add = function (key, descriptorT) {
        if (!this.isExtensible) {
            throw 'Adding new property to a unexpendable CybObj.';
        }
        this.assimilateProp(key, descriptorT);
    };
    /**
     * Couple given listeners with acessor/mutator and assign to the given property ($key)
     * @param {keyT} key
     * @param {descriptorT} descriptor
     */
    CybObj.prototype.assimilateProp = function (key, descriptor) {
        var privateKey = "#".concat(key);
        Object.defineProperty(this, key, {
            enumerable: true,
            configurable: false,
            get: function () {
                var _a;
                var value = this[privateKey];
                (_a = descriptor.onAccess) === null || _a === void 0 ? void 0 : _a.call(descriptor, key, value);
                return value;
            },
            set: function (newVal) {
                var _a;
                var oldVal = this[privateKey];
                this[privateKey] = newVal;
                (_a = descriptor.onChange) === null || _a === void 0 ? void 0 : _a.call(descriptor, key, oldVal, newVal);
            },
        });
        this[key] = descriptor.value;
    };
    return CybObj;
}());

export { CybObj };
//# sourceMappingURL=index.mjs.map
