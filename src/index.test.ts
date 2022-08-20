import { Cybobj } from './';
import type { descriptorT, primalObjT } from './Types';

describe('Test object assimilation', () => {
  const data: primalObjT = {
    name: {
      value: 'John Doe',
      onChange: jest.fn,
      onAccess: jest.fn,
    },
    age: {
      value: 'John Doe',
      onChange: jest.fn,
      onAccess: jest.fn,
    },
  };
  const assimilatedObj = new Cybobj(data);
  it('Should assimilate correctly', () => {
    Object.keys(data).forEach((key) => {
      const value = data[key] as descriptorT;
      const accessSpy = jest.spyOn(value, 'onAccess');
      const changeSpy = jest.spyOn(value, 'onChange');
      expect(assimilatedObj[key]).toBe(data[key]?.value);
      expect(accessSpy).toHaveBeenCalled();
      const newVal = 'foo';
      assimilatedObj[key] = newVal;
      expect(changeSpy).toHaveBeenCalled();
      expect(assimilatedObj[key]).toBe(newVal);
      expect(accessSpy).toHaveBeenCalled();
    });
  });
});
