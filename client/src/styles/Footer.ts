import { createStyles, Theme } from '@material-ui/core'

export const styles = (theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.grey[600],
      fontSize: 14,
      width: '70%',
      maxWidth: 1000,
      marginTop: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(10),
      paddingLeft: '4%',
      paddingRight: '4%',
      borderTop: 'solid #eee 1px'
    }
  })

export type Styles = typeof styles
