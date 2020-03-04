import {
  get,
  size,
  calculateAverageDiameter,
  formatDate,
  doubleDigit
} from '../utils';
import { SizeUnit } from '../types';

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


describe('formatDate function', () => {
  it('Should accept a date object and return that date in the form dd-mm-yyyy', () => {
    const day = '10';
    const month = '05';
    const year = '2000';

    const date = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );

    expect(formatDate(date)).toBe(`${day}-${month}-${year}`);
  });
});


describe('doubleDigit function', () => {
  it('Should accept a single digit number and return a string version of the number starting with 0', () => {
    expect(doubleDigit(1)).toBe('01');
    expect(doubleDigit(2)).toBe('02');
    expect(doubleDigit(3)).toBe('03');
    expect(doubleDigit(4)).toBe('04');
    expect(doubleDigit(5)).toBe('05');
    expect(doubleDigit(6)).toBe('06');
    expect(doubleDigit(7)).toBe('07');
    expect(doubleDigit(8)).toBe('08');
    expect(doubleDigit(9)).toBe('09');
  });

  it('Should accept a double digit number return a string version of the number', () => {
    expect(doubleDigit(10)).toBe('10');
    expect(doubleDigit(25)).toBe('25');
    expect(doubleDigit(99)).toBe('99');
  });
});
