[Cybobj](../README.md) / Mutator

# Class: Mutator

## Implements

- `MutatorT`

## Indexable

▪ [key: `keyT`]: `unknown`

## Table of contents

### Constructors

- [constructor](Mutator.md#constructor)

### Properties

- [isExtensible](Mutator.md#isextensible)

### Methods

- [add](Mutator.md#add)
- [makePropertyWatchable](Mutator.md#makepropertywatchable)

## Constructors

### constructor

• **new Mutator**(`primalObj`, `isExtensible?`)

Construct given object to be listenable

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `primalObj` | `primalObjT` | `undefined` |
| `isExtensible` | `boolean` | `false` |

## Properties

### isExtensible

• `Protected` **isExtensible**: `boolean` = `true`

#### Defined in

Mutator.ts:7

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

MutatorT.add

___

### makePropertyWatchable

▸ `Protected` **makePropertyWatchable**(`key`, `descriptor`): `void`

Couple given listeners with acessor/mutator and assign to the given property ($key)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `keyT` |
| `descriptor` | `descriptorT` |

#### Returns

`void`
