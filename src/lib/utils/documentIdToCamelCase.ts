export const documentIdToCamelCase = (str: string | undefined) =>
  str!.charAt(0).toLowerCase() + str!.slice(1);
