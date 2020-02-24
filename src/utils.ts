export const createBEM = (block): string => (element: string, modifiers: [string] = []): string => {
  let classes = [block];

  if (element) classes.push(`${block}__${element}`);

  if (modifiers.length > 0) {
    modifiers.forEach(m => classes.push(
      `${block}__${element}--${m}`
    ));
  }

  return classes.join(' ');
};
