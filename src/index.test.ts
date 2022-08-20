import { Cybobj } from './';
import type { descriptorT, primalObjT } from './Types';

describe('test object Mutation', () => {
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
  const mutatedObj = new Cybobj(data);
  it('Should mutate correctly', () => {
    Object.keys(data).forEach((key) => {
      const value = data[key] as descriptorT;
      const accessSpy = jest.spyOn(value, 'onAccess');
      const changeSpy = jest.spyOn(value, 'onChange');
      expect(mutatedObj[key]).toBe(data[key]?.value);
      expect(accessSpy).toHaveBeenCalled();
      const newVal = 'foo';
      mutatedObj[key] = newVal;
      expect(changeSpy).toHaveBeenCalled();
      expect(mutatedObj[key]).toBe(newVal);
      expect(accessSpy).toHaveBeenCalled();
    });
  });
});
