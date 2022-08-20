export type keyT = string | number;
export type privateKeyT = string;

export type descriptorT = {
  value: unknown;
  onChange: (key: keyT, oldValue: unknown, newValue: unknown) => void;
  onAccess?: (key: keyT, value: unknown) => void;
};

export interface MutatorT {
  [key: keyT]: unknown;
  add: (key: keyT, descriptor: descriptorT) => void;
}

export type primalObjT = {
  [key: keyT]: descriptorT;
};
