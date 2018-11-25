import * as React from 'react'

import { Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'

import { styles, Styles } from '../styles/Title'

interface Props extends WithStyles<Styles> {}

const Title: React.SFC<Props> = (props: Props) => (
  <div className={props.classes.title}>
    <Typography variant="h2" className={props.classes.typography}>
      Welcome to <span className={props.classes.blue}>Proto</span> Note
    </Typography>
  </div>
)

export default withStyles(styles)(Title)
