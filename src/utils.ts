export const get = (path: Array<string>) => (source: object, defaultValue?: any): any => {
  const value = source[path[0]];

  if (path.length === 1) {
    return value === undefined ? defaultValue : value;
  }

  return get(path.slice(1))(value, defaultValue);
};

// USED FOR TESTING
export const dive = (component, levels: number = 1) => {
  const child = component.children[0];

  if (levels > 1) return dive(child, levels - 1);

  return child;
};
