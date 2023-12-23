export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
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
    image: ArticleBlockType.IMAGE;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    title?: string
    paragraphs: string[]
    text: ArticleBlockType.TEXT;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export interface Article {
    id: string;
    img: string;
    views: number;
    title: string;
    subtitle: string;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[]
}
