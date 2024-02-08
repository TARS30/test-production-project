import { Profile } from 'entities/Profile/model/types/profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_USER_DATA = 'NO_USER_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
