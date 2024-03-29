import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../../index';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'tars',
  age: 11,
  country: Country.Belarus,
  lastname: 'cherniv',
  first: 'sanya',
  city: 'rbest',
  currency: Currency.USD,
};

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first name and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_AGE,
    ]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
