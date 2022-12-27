import { IProduct } from '../../types';

export const getMaxMinValueByField = (key: 'price' | 'stock', data: IProduct[]): number[] => {
  const sorted = [...data.sort((a: IProduct, b: IProduct) => a[key] - b[key])];
  const minValue = sorted[0][key];
  const maxValue = sorted[sorted.length - 1][key];
  return [minValue, maxValue];
};
