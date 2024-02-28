import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/model/slices/articleDetailsSlice';
import { counterReducer } from '@/entities/Counter';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/features/EditableProfileCard';
import { ArticleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  ArticleDetailsPage: ArticleDetailsPageReducer,
  counter: counterReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateScheme>,
  asyncReducers?:ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
