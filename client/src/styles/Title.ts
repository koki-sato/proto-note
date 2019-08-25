import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    title: {
      marginTop: theme.spacing(8),
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: theme.spacing(5),
      textAlign: 'center'
    },
    typography: {
      color: theme.palette.common.black
    },
    blue: {
      color: theme.palette.primary.main,
      fontWeight: 500
    }
  })

export type Styles = typeof styles
