// USED FOR TESTING
export const dive = (component, levels: number = 1) => {
  const child = component.children[0];

  if (levels > 1) return dive(child, levels - 1);

  return child;
};
