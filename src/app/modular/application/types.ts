import { User } from '../auth/types';

export interface Application {
  applicant: User,
  id: number,
  postId: number,
  status: number,
  appliedAt: Date,
  gitHubURL?: string,
  linkedInURL?: string,
  portfolioURL?: string,
  otherURL?: string,
  resumeURL?: string,
  additionalInfo?: string,
}

export interface Applications {
  [id: number]: Application
}

export interface ApplicationState {
  applications: Applications,
}
