export interface User {
  email: string
  executive: boolean
  firstName: string
  lastName: string
  updatedAt: Date
}

export interface AuthState {
  loading: boolean,
  loggedIn: boolean,
  currentUser?: User
  error?: string
}
