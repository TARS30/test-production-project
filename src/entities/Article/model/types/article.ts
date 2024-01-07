import { User } from 'entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED_AT = 'createdAt',
}

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export enum ArticleView {
    WIDE = 'WIDE',
    SQUARE = 'SQUARE'
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    code: string
    type: ArticleBlockType.CODE;
}
export interface ArticleImageBlock extends ArticleBlockBase {
    src: string
    title: string
    type: ArticleBlockType.IMAGE;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    title?: string
    paragraphs: string[]
    type: ArticleBlockType.TEXT;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export interface Article {
    id: string;
    img: string;
    user: User;
    views: number;
    title: string;
    subtitle: string;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
