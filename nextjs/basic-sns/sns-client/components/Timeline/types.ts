export interface Profile {
  id: string;
  bio?: string;
  profileImgUrl?: string;
  userId: string;
  user: IUser;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  posts: IPost[];
  profile: Profile;
}

export interface IPost {
  id: string;
  content: string;
  createdAt: string;
  authorId: string;
  author: IUser;
}
