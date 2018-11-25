import * as React from 'react'

import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { CheckCircle, Close, Error, Info, Warning } from '@material-ui/icons'

import { styles, Styles } from '../styles/Alert'

const variantIcon = {
  success: CheckCircle,
  warning: Warning,
  error: Error,
  info: Info,
}

interface Props extends WithStyles<Styles> {
  isOpen: boolean
  variant: keyof typeof variantIcon
  message: string
  onClose: () => void
}

const Alert: React.SFC<Props> = (props: Props) => {
  const Icon = variantIcon[props.variant]

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={props.isOpen}
      autoHideDuration={6000}
      onClose={props.onClose}
    >
      <SnackbarContent
        className={props.classes[props.variant]}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={props.classes.message}>
            <Icon className={props.classes.icon} />
            {props.message}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={props.onClose}>
            <Close className={props.classes.icon} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  )
}

export default withStyles(styles)(Alert)
