import * as React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { LibraryBooks as LibraryBooksIcon } from '@material-ui/icons'

import { Actions } from '../actions'
import { State as AppState } from '../store'
import { styles, Styles } from '../styles/Header'

interface Props extends RouteComponentProps, WithStyles<Styles> {
  isInitialized: AppState['isInitialized']
  isLoggedIn: AppState['isLoggedIn']
  createAlert: Actions['alertOpen']
  onClickLogout: Actions['logout']
}

const Header: React.FC<Props> = (props: Props) => {
  const onLogoutSuccess = () => {
    props.history.push('/login')
    props.createAlert({ variant: 'success', message: 'Logout succeeded' })
  }
  const onLogoutFailure = (error: string) => {
    props.createAlert({ variant: 'error', message: error })
  }
  const onClickLogout = () => props.onClickLogout(onLogoutSuccess, onLogoutFailure)

  return (
    <AppBar position="static" className={props.classes.appbar}>
      <Toolbar className={props.classes.toolbar}>
        <Link to="/" className={props.classes.link}>
          <LibraryBooksIcon />
        </Link>
        <Typography variant="h6" className={props.classes.typography}>
          <Link to="/" className={props.classes.link}>
            Proto Note
          </Link>
        </Typography>
        {props.isInitialized ? (
          props.isLoggedIn ? (
            <React.Fragment>
              <Link to="/notes/create" className={props.classes.link}>
                <Button className={props.classes.blueButton}>Post</Button>
              </Link>
              <Button className={props.classes.whiteButton} onClick={onClickLogout}>
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/register" className={props.classes.link}>
                <Button className={props.classes.blueButton}>Sign up</Button>
              </Link>
              <Link to="/login" className={props.classes.link}>
                <Button className={props.classes.whiteButton}>Login</Button>
              </Link>
            </React.Fragment>
          )
        ) : null}
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(withStyles(styles)(Header))
