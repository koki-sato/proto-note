import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    appbar: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black
    },
    toolbar: {
      width: '95%',
      maxWidth: 1150,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex'
    },
    typography: {
      color: theme.palette.common.black,
      marginLeft: theme.spacing(1),
      flexGrow: 1
    },
    link: {
      color: 'inherit',
      textDecoration: 'none'
    },
    whiteButton: {
      width: 88,
      color: theme.palette.common.black,
      textTransform: 'none',
      marginLeft: 2,
      marginRight: 2
    },
    blueButton: {
      width: 88,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      textTransform: 'none',
      marginLeft: 2,
      marginRight: 2
    }
  })

export type Styles = typeof styles
