import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    loading: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: theme.spacing(5),
      textAlign: 'center'
    },
    typography: {
      color: theme.palette.common.black
    }
  })

export type Styles = typeof styles
