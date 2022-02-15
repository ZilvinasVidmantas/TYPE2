export const formatLine = (text: string, indent: number = 0): string => {
  return ('\t').repeat(indent) + text + '\n';
} 