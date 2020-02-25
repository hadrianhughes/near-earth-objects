import { dive } from './utils';

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
