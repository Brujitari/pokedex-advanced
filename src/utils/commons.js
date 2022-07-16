export const capitalize = ([first, ...rest]) =>
  first.toUpperCase().concat(...rest);

export const startWithPadding = (arg, amount, padding) => arg.toString().padStart(amount, padding);