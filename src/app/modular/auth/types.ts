export interface User {
  email: string
  executive: boolean
  firstName: string
  lastName: string
  updatedAt: Date
}

export interface AuthState {
  loading: boolean
  currentUser?: User
  errMsg: String
}
