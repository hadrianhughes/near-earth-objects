import { SizeUnit } from './reducer';

export const get = (path: Array<string>) => (source: object, defaultValue?: any): any => {
  const value = source[path[0]];

  if (path.length === 1) {
    return value === undefined ? defaultValue : value;
  }

  return get(path.slice(1))(value, defaultValue);
};

export const size = (unit: SizeUnit) => (value: number): string => {
  switch (unit) {
    case SizeUnit.feet:
      return `${value}ft`;
    case SizeUnit.miles:
      return `${value}mi`;
    case SizeUnit.kilometers:
      return `${value}km`;
    case SizeUnit.meters:
      return `${value}m`;
    default:
      return String(value);
  }
};

// USED FOR TESTING
export const dive = (component, levels: number = 1) => {
  const child = component.children[0];

  if (levels > 1) return dive(child, levels - 1);

  return child;
};
