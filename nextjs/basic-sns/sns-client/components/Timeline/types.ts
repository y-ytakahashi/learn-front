export interface IUser {
  id: string;
  username: string;
  email: string;
  posts: IPost[];
}

export interface IPost {
  id: string;
  content: string;
  createdAt: string;
  authorId: string;
  author: IUser;
}
