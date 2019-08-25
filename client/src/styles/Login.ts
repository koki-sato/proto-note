import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    paper: {
      width: '80%',
      maxWidth: 660,
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3)
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '85%',
      maxWidth: 440,
      marginTop: theme.spacing(1)
    },
    submit: {
      marginTop: theme.spacing(3)
    }
  })

export type Styles = typeof styles
