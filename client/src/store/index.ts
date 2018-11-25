export interface Alert {
  variant: 'success' | 'warning' | 'error' | 'info'
  message: string
}

export interface State {
  isInitialized: boolean
  isLoading: boolean
  isLoggedIn: boolean
  isAlertOpen: boolean
  alert?: Alert
}

export const initialState: State = {
  isInitialized: false,
  isLoading: false,
  isLoggedIn: false,
  isAlertOpen: false,
}
