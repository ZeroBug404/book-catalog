export interface IBook {
  _id: number;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
  quantity?: number;
}
