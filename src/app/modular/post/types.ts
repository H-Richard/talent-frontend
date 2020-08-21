import { User } from '../auth/types';

export interface Post {
  id: number
  author: User
  active: string
  title: string
  description: string
  desirements: string[]
  requirements: string[]
  createdAt: Date
  expiresAt: Date
  updatedAt: Date
}

export interface Posts {
  [id: number]: Post
}

export interface PostState {
  loading: boolean
  posts: Posts
  error?: string
}
