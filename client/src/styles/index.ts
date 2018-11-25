import { createMuiTheme } from '@material-ui/core/'
import { blue } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    common: {
      black: '#444',
      white: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
})
