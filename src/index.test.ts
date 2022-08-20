import { Cybobj } from './';
import type { CybobjT, descriptorT, keyT, primalObjT } from './Types';

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
  assimilatedObj: CybobjT,
) => {
  const accessSpy = jest.spyOn(value, 'onAccess');
  const changeSpy = jest.spyOn(value, 'onChange');
  const newVal = 'foo';

  expect(assimilatedObj[key]).toBe(data[key]?.value);
  expect(accessSpy).toHaveBeenCalled();
  assimilatedObj[key] = newVal;
  expect(changeSpy).toHaveBeenCalled();
  expect(assimilatedObj[key]).toBe(newVal);
  expect(accessSpy).toHaveBeenCalled();
};

describe('Test object assimilation as unexpendable', () => {
  const assimilatedObj = new Cybobj(data);
  it('can instantiate as unexpendable', () => {
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
  const assimilatedObj = new Cybobj(data, true);
  it('can instantiate as expendable', () => {
    Object.keys(data).forEach((key) => {
      spyAndTestListeners(key, data[key] as descriptorT, assimilatedObj);
    });
  });

  it('is expendable', () => {
    const key: keyT = 'position';
    const descriptor: descriptorT = {
      value: 'Tertiary Adjunct',
      onChange: jest.fn,
      onAccess: jest.fn,
    };
    assimilatedObj.add(key, descriptor);
    // update original data object to spy
    data[key] = descriptor;
    spyAndTestListeners(key, descriptor, assimilatedObj);
  });
});
