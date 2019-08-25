import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    container: {
      width: '85%',
      maxWidth: 868,
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    list: {
      marginTop: theme.spacing(6),
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    typography: {
      color: theme.palette.common.black,
      textAlign: 'center'
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
      display: 'flex'
    }
  })

export type Styles = typeof styles
