import { dive, get } from '../utils';

describe('dive function', () => {
  it('Should accept an object with a populated `children` array and return the first element', () => {
    const child = { foo: 'bar' };

    const component = {
      children: [child]
    };

    expect(dive(component)).toStrictEqual(child);
  });

  it('Should accept an object with a populated `children` array containing more objects of the same nature, and a number, perform the operation recursively', () => {
    const child = { foo: 'bar' };

    const component = {
      children: [
        {
          children: [
            {
              children: [child]
            }
          ]
        }
      ]
    };

    expect(dive(component, 3)).toStrictEqual(child);
  });
});


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
