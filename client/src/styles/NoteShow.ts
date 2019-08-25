import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    container: {
      width: '85%',
      maxWidth: 868,
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
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
    body: {
      color: 'inherit',
      marginTop: theme.spacing(8),
      width: '100%',
      textDecoration: 'none'
    }
  })

export type Styles = typeof styles
