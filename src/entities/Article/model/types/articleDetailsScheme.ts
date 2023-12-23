import { Article } from './article';

export interface articleDetailsScheme {
    isLoading: boolean;
    error?: string;
    data?: Article
}
