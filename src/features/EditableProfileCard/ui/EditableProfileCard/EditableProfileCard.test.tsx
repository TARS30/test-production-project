import { Country } from 'entitiess/Country';
import { Currency } from 'entitiess/Currency';
import { Profile } from 'entitiess/Profile';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  age: 300,
  city: 'Brest',
  country: Country.Belarus,
  currency: Currency.USD,
  first: 'Alexandr',
  lastname: 'Chernov',
  username: 'TARS30',
  id: '1',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'TARS30',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('should change readonly mode', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));
    expect(screen.getByTestId('EditableProfileCardHeader.Save')).toBeInTheDocument();

    expect(screen.getByTestId('EditableProfileCardHeader.Cancel')).toBeInTheDocument();
  });

  test('should set input values to default', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    expect(screen.getByTestId('ProfileCard.FirstName')).toBeInTheDocument();

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Cancel'));

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('Alexandr');
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Chernov');
  });

  test('error should appear if input value is empty', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Save'));

    expect(screen.getByTestId('EditableProfileCard.Error.Header')).toBeInTheDocument();
    expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('Alexandr');
  });

  test('if no validation errors should initiate PUT request to server', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Save'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
