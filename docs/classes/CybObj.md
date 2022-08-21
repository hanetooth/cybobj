[Cybobj](../README.md) / CybObj

# Class: CybObj

## Implements

- `CybObjT`

## Indexable

▪ [key: `keyT`]: `unknown`

## Table of contents

### Constructors

- [constructor](CybObj.md#constructor)

### Properties

- [isExtensible](CybObj.md#isextensible)

### Methods

- [add](CybObj.md#add)
- [assimilateProp](CybObj.md#assimilateprop)

## Constructors

### constructor

• **new CybObj**(`primalObj`, `isExtensible?`)

Assimilate given object to be listenable

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `primalObj` | `primalObjT` | `undefined` |
| `isExtensible` | `boolean` | `false` |

## Properties

### isExtensible

• `Protected` **isExtensible**: `boolean` = `true`

#### Defined in

CybObj.ts:7

## Methods

### add

▸ **add**(`key`, `descriptorT`): `void`

Add new listenable property to $self

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `keyT` |
| `descriptorT` | `descriptorT` |

#### Returns

`void`

#### Implementation of

CybObjT.add

___

### assimilateProp

▸ `Protected` **assimilateProp**(`key`, `descriptor`): `void`

Couple given listeners with acessor/mutator and assign to the given property ($key)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `keyT` |
| `descriptor` | `descriptorT` |

#### Returns

`void`
