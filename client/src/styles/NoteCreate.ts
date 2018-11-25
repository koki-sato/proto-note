import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing.unit * 8,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: theme.spacing.unit,
      height: '100%',
    },
    item: {
      border: 'solid #eee 3px',
    },
    title: {
      fontSize: 24,
      lineHeight: 1.4,
      paddingLeft: theme.spacing.unit * 1.5,
      paddingRight: theme.spacing.unit * 1.5,
      paddingTop: theme.spacing.unit / 2,
      paddingBottom: theme.spacing.unit / 2,
      width: 'auto',
    },
    markdown: {
      fontSize: 16,
      lineHeight: 1.2,
      padding: theme.spacing.unit * 1.5,
      width: 'auto',
      height: '100%',
    },
    body: {
      padding: theme.spacing.unit * 2,
      width: 'auto',
      height: 562,
      overflowY: 'scroll',
    },
    register: {
      width: 100,
      height: 40,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      marginTop: theme.spacing.unit * 4,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })

export type Styles = typeof styles
