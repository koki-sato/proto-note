import * as React from 'react'

import { Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'

import { styles, Styles } from '../styles/Loading'

interface Props extends WithStyles<Styles> {}

const Loading: React.FC<Props> = (props: Props) => (
  <div className={props.classes.loading}>
    <Typography component="h2" variant="h5" className={props.classes.typography}>
      Loading ...
    </Typography>
  </div>
)

export default withStyles(styles)(Loading)
