import { get, size, calculateAverageDiameter } from '../utils';
import { SizeUnit } from '../reducer';

describe('get function', () => {
  it('Should accept an array of strings and return a function', () => {
    const path = ['foo', 'bar'];

    expect(typeof get(path)).toBe('function');
  });

  it('The returned function should accept an object and return the value at the given path', () => {
    const path = ['foo', 'bar'];
    const object = {
      foo: {
        bar: 'test'
      }
    };

    expect(get(path)(object)).toBe('test');
  });

  it('Should return undefined or a default value if given when the path does not exist on the object', () => {
    const path = ['foo', 'bar'];
    const object = {
      foo: {
        baz: 'test'
      }
    };

    expect(get(path)(object)).toBe(undefined);
    expect(get(path)(object, 'default')).toBe('default');
  });
});


describe('size function', () => {
  it('Should accept a value without a size unit and return the given value as a string', () => {
    const input = 5;

    expect(size(null)(input)).toBe(String(input));
  });

  it('Should accept a SizeUnit and return a function', () => {
    expect(typeof size(SizeUnit.feet)).toBe('function');
  });

  it('Should accept a SizeUnit and a number and return a string formatted with appropriate unit', () => {
    const testVal = 10;

    expect(size(SizeUnit.feet)(testVal)).toBe(`${testVal}ft`);
    expect(size(SizeUnit.miles)(testVal)).toBe(`${testVal}mi`);
    expect(size(SizeUnit.kilometers)(testVal)).toBe(`${testVal}km`);
    expect(size(SizeUnit.meters)(testVal)).toBe(`${testVal}m`);
  });
});


describe('calculateAverageDiameter function', () => {
  const min = 2;
  const max = 10;

  it('Should accept a min and max and return the average of the two', () => {
    expect(calculateAverageDiameter(min, max)).toBe((min + max) / 2);
  });

  it('Should return min when max is falsy', () => {
    expect(calculateAverageDiameter(min, null)).toBe(min);
  });

  it('Should return max when min is falsy', () => {
    expect(calculateAverageDiameter(null, max)).toBe(max);
  });

  it('Should return 0 when both are falsy', () => {
    expect(calculateAverageDiameter(null, null)).toBe(0);
  });
});
