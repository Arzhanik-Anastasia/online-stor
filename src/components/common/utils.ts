import { IProduct } from '../../types';

export const getMaxMinValueByField = (key: 'price' | 'stock', data: IProduct[]): number[] => {
  const sorted = [...data.sort((a: IProduct, b: IProduct) => a[key] - b[key])];
  const minValue = sorted[0][key];
  const maxValue = sorted[sorted.length - 1][key];
  return [minValue, maxValue];
};

export const validateName = (name: string): boolean => {
  const arr = name.trim().split(' ');
  return arr.length >= 2 && arr.every((item) => item.length >= 3);
};

export const validatePhone = (phone: string): boolean => {
  const re = /^[+]{1}[1-9]{9,}$/;
  return re.test(phone);
};

export const validateEmail = (email: string): boolean => {
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(email);
};

export const validateAdress = (adress: string): boolean => {
  const arr = adress.trim().split(' ');
  return arr.length >= 3 && arr.every((item) => item.length >= 5);
};

export const validateCardNumber = (card: string): boolean => card.length === 16;

export const validateCardCVV = (cvv: string): boolean => cvv.length === 3;

export const validateDate = (date: string): boolean => {
  const month:number = +date.slice(0, 2);
  const day:number = +date.slice(-2);
  return date.length >= 5 && month <= 12 && day <= 31;
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
