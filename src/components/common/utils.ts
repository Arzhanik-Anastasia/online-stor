import { IProduct } from '../../types';

export const getMaxMinValueByField = (key: 'price' | 'stock', data: IProduct[]): number[] => {
  const sorted = [...data.sort((a: IProduct, b: IProduct) => a[key] - b[key])];
  const minValue = sorted[0][key];
  const maxValue = sorted[sorted.length - 1][key];
  return [minValue, maxValue];
};

export const formatDate = (x:string, pattern:string): string => {
  const strippedValue: string = x.replace(/[^0-9]/g, '');
  const chars = strippedValue.split('');
  let count = 0;

  let formatted = '';
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    if (chars[count]) {
      if (/\*/.test(c)) {
        formatted += chars[count];
        count++;
      } else {
        formatted += c;
      }
    }
  }
  return formatted;
};
