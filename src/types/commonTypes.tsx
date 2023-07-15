export type IBook = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  review: [];
};

export type Inputs = {
  searchResult: string;
};
