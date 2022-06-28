/**
 * Join multiple strings to produce a single string of TailwindCSS classnames
 * @param {string[]} classes - The group of classes
 * @returns {string} - The single class that is generated
 */
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}