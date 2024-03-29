import { UserRole } from '../consts/consts';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    role?: UserRole[]
}

export interface UserScheme {
    authData?: User;

    _inited: boolean
}
