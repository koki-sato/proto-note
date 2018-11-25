import * as React from 'react'

import { withStyles, WithStyles } from '@material-ui/core/styles'

import { styles, Styles } from '../styles/Footer'

interface Props extends WithStyles<Styles> {}

const Footer: React.SFC<Props> = (props: Props) => (
  <footer className={props.classes.footer}>Copyright © 2018 Koki Sato All Rights Reserved.</footer>
)

export default withStyles(styles)(Footer)
