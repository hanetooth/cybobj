import { CybObj } from './';
import type { CybObjT, descriptorT, keyT, primalObjT } from './Types';

const data: primalObjT = {
  name: {
    value: 'Seven of Nine',
    onChange: jest.fn,
    onAccess: jest.fn,
  },
  subsection: {
    value: 'Unimatix 01',
    onChange: jest.fn,
    onAccess: jest.fn,
  },
};

const spyAndTestListeners = (
  key: keyT,
  value: descriptorT,
  assimilatedObj: CybObjT,
) => {
  const accessSpy = jest.spyOn(value, 'onAccess');
  const changeSpy = jest.spyOn(value, 'onChange');
  const newVal = 'foo';

  const assimilatedVal = assimilatedObj[key];

  it('can observe accessing value', () => {
    expect(assimilatedVal).toBe(data[key]?.value);
    expect(accessSpy).toHaveBeenCalledWith(key, assimilatedVal);
  });

  it('can observe value updates', () => {
    assimilatedObj[key] = newVal;
    expect(changeSpy).toHaveBeenCalledWith(key, assimilatedVal, newVal);
  });

  it('can update value just like as a normal object', () => {
    expect(assimilatedObj[key]).toBe(newVal);
  });
};

describe('Test object assimilation as unexpendable', () => {
  const assimilatedObj = new CybObj(data);
  describe('can instantiate as unexpendable', () => {
    Object.keys(data).forEach((key) => {
      spyAndTestListeners(key, data[key] as descriptorT, assimilatedObj);
    });
  });

  it('is unexpendable', () => {
    expect(() => {
      assimilatedObj.add('position', {
        value: 'Tertiary Adjunct',
        onChange: jest.fn,
        onAccess: jest.fn,
      });
    }).toThrow();
  });
});

describe('Test object assimilation as expendable', () => {
  const assimilatedObj = new CybObj(data, true);
  describe('can instantiate as expendable', () => {
    Object.keys(data).forEach((key) => {
      spyAndTestListeners(key, data[key] as descriptorT, assimilatedObj);
    });
  });

  describe('is expendable', () => {
    const key: keyT = 'position';
    const descriptor: descriptorT = {
      value: 'Tertiary Adjunct',
      onChange: jest.fn,
      onAccess: jest.fn,
    };
    assimilatedObj.add(key, descriptor);
    // update original data object to be able to spy
    data[key] = descriptor;
    spyAndTestListeners(key, descriptor, assimilatedObj);
  });
});
