import { Post } from '../post/types';
import { User } from '../auth/types';

export interface Application {
  id: number
  status: number
  appliedAt: Date
  applicant: User
  post: Post
  resumeURL: string
  githubURL: string
  linkedinURL: string
  otherURL: string
  portfolioURL: string
  additionalInfo: string
}

export interface Applications {
  [id: number]: Application
}

export interface ApplicationState {
  loading: boolean
  applications: Applications
}
