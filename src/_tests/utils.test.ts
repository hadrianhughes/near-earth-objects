import {
  get,
  size,
  calculateAverageDiameter,
  formatDate,
  doubleDigit,
  stringToDate,
  changeDateBy,
  compose,
  responseToResults,
  toFixed,
  makeSort
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

  it('Should accept a string rather than an array and return that property', () => {
    const path = 'foo';
    const object = {
      foo: 'bar'
    };

    expect(get(path)(object)).toBe(object.foo);
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

    expect(formatDate(date)).toBe(`${year}-${month}-${day}`)
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


describe('stringToDate function', () => {
  it('Should accept a string in the format yyyy-mm-dd and return a date object', () => {
    const dateString = '2020-01-01';

    const expectedDate = new Date(2020, 0, 1);

    expect(stringToDate(dateString)).toStrictEqual(expectedDate);
  });

  it('Should accept a string not in the wrong format and return null', () => {
    const dateString = 'wrong';

    expect(stringToDate(dateString)).toBe(null);
  });
});

describe('changeDateBy function', () => {
  it('Should accept an integer and return a function', () => {
    expect(typeof changeDateBy(5)).toBe('function');
  });

  it('Should accept an integer and date and return a new date increased by the given number', () => {
    const year = 2020;
    const month = 0;
    const day = 1;

    const date = new Date(year, month, day);
    const changeBy = 5;

    const expectedOutput = new Date(2020, 0, 6);

    expect(changeDateBy(changeBy)(date)).toStrictEqual(expectedOutput);
  });

  it('Should accept an integer and date at the end of a month and return a date in the next month', () => {
    const year = 2020;
    const month = 0;
    const day = 31;

    const date = new Date(year, month, day);
    const changeBy = 1;

    const expectedOutput = new Date(year, month + 1, 1);

    expect(changeDateBy(changeBy)(date)).toStrictEqual(expectedOutput);
  });
});


describe('compose function', () => {
  it('Should accept any number of function arguments and return a single function', () => {
    expect(
      typeof compose(
        () => {},
        () => {}
      )
    ).toBe('function');
  });

  it('Should return a function which calls all of the constituent functions', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const fn3 = jest.fn();

    const composedFn = compose(fn1, fn2, fn3);
    composedFn();

    expect(fn1).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
    expect(fn3).toHaveBeenCalled();
  });

  it('Should return a function which passes a given value down the pipeline of functions from right to left', () => {
    const trim = str => str.trim();
    const toUpper = str => str.toUpperCase();
    const words = str => str.split(' ');

    const testString = '  hello world   ';
    const expectedOutput = ['HELLO', 'WORLD'];

    const composedFn = compose(words, toUpper, trim);

    expect(composedFn(testString)).toStrictEqual(
      words(
        toUpper(
          trim(testString)
        )
      )
    );
  });
});


describe('responseToResults function', () => {
  it('Should accept an object of type Response and return an array of objects', () => {
    const response = {
      near_earth_objects: {
        example1: [
          {
            id: '1',
            name: 'One',
            estimated_diameter: {}
          }
        ],
        example2: [
          {
            id: '2',
            name: 'Two',
            estimated_diameter: {}
          }
        ]
      }
    };

    const expectedOutput = [
      {
        id: '1',
        name: 'One',
        estimated_diameter: {}
      },
      {
        id: '2',
        name: 'Two',
        estimated_diameter: {}
      }
    ];

    expect(responseToResults(response)).toStrictEqual(expectedOutput);
  });
});


describe('toFixed function', () => {
  it('Should accept an integer and return a function', () => {
    expect(typeof toFixed(1)).toBe('function');
    expect(typeof toFixed(2)).toBe('function');
  });

  it('Should accept a second integer and return the same integer', () => {
    const testValue = 5;

    expect(toFixed(2)(testValue)).toBe(testValue);
  });

  it('Should accept a decimal number as the second argument and return than number rounded to n places', () => {
    const testValue = 5.123456;

    expect(toFixed(1)(testValue)).toBe(5.1);
    expect(toFixed(2)(testValue)).toBe(5.12);
    expect(toFixed(3)(testValue)).toBe(5.123);
  });
});


describe('makeSort function', () => {
  it('Should accept a function and return a function', () => {
    expect(typeof makeSort(() => {})).toBe('function');
  });

  it('Should accept a function and two values, run the getter on both values and return an integer from -1 to 1 indicating which value is bigger', () => {
    const identity = x => x;
    const sortIdentity = makeSort(identity);

    expect(sortIdentity(1, 2)).toBe(-1);
    expect(sortIdentity(1, 1)).toBe(0);
    expect(sortIdentity(2, 1)).toBe(1);

    const getFoo = x => x.foo;
    const sortFoo = makeSort(getFoo);

    expect(sortFoo({ foo: 1 }, { foo: 1 })).toBe(0);
  });

  it('Should return the array in ascending order when used with Array.prototype.sort', () => {
    const testSet = [
      { foo: 5 },
      { foo: 3 },
      { foo: 1 },
      { foo: 4 },
      { foo: 2 }
    ];

    const expectedOutput = [
      { foo: 1 },
      { foo: 2 },
      { foo: 3 },
      { foo: 4 },
      { foo: 5 }
    ];

    const getFoo = x => x.foo;
    const sortFoo = makeSort(getFoo);

    expect(testSet.sort(sortFoo)).toStrictEqual(expectedOutput);
  });
});
