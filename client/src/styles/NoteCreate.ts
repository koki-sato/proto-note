import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(8),
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: theme.spacing(1),
      height: '100%'
    },
    item: {
      border: 'solid #eee 3px'
    },
    title: {
      fontSize: 24,
      lineHeight: 1.4,
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      width: 'auto'
    },
    markdown: {
      fontSize: 16,
      lineHeight: 1.2,
      padding: theme.spacing(1.5),
      width: 'auto',
      height: '100%'
    },
    body: {
      padding: theme.spacing(2),
      width: 'auto',
      height: 562,
      overflowY: 'scroll'
    },
    register: {
      width: 100,
      height: 40,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      marginTop: theme.spacing(4),
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  })

export type Styles = typeof styles
