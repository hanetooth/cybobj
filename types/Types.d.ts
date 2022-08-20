export declare type keyT = string | number;
export declare type privateKeyT = string;
export declare type descriptorT = {
    value: unknown;
    onChange: (key: keyT, oldValue: unknown, newValue: unknown) => void;
    onAccess?: (key: keyT, value: unknown) => void;
};
export interface MutatorT {
    [key: keyT]: unknown;
    add: (key: keyT, descriptor: descriptorT) => void;
}
export declare type primalObjT = {
    [key: keyT]: descriptorT;
};
//# sourceMappingURL=Types.d.ts.map