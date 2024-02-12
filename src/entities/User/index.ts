export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
  getUserRole,
  isUserAdmin,
  isUserManager,
} from './model/selectors/roleSelectors';

export {
  userReducer,
  userActions,
} from './model/slice/userSlice';

export { UserRole } from './model/consts/consts';

export type{
  User,
  UserScheme,
} from './model/types/user';
