export interface Article {
  id: number;
  label: string;
  createdTime: string;
  views: number;
}

export interface Item {
  id: number;
  label: string;
}

export type Articles = Article[];

export type Category = Item[];

export type Tags = Item[];
