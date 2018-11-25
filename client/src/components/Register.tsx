import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import {
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
} from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { LockOutlined as LockIcon } from '@material-ui/icons'

import { Actions } from '../actions'
import { State as AppState } from '../store'
import { styles, Styles } from '../styles/Register'
import { RegisterResult } from '../types'

interface Props extends RouteComponentProps, WithStyles<Styles> {
  isLoggedIn: AppState['isLoggedIn']
  createAlert: Actions['alertOpen']
  handleSubmit: Actions['register']
}

interface State {
  username: string
  password: string
}

class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }

    if (this.props.isLoggedIn) this.props.history.replace('/')
    this.onRegisterSuccess = this.onRegisterSuccess.bind(this)
    this.onRegisterFailure = this.onRegisterFailure.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  public render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Avatar className={this.props.classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={this.props.classes.form} onSubmit={this.handleSubmit}>
          <FormControl margin="normal" required={true} fullWidth={true}>
            <InputLabel htmlFor="name">Username</InputLabel>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="username"
              autoFocus={true}
              onChange={this.handleChangeUsername}
            />
          </FormControl>
          <FormControl margin="normal" required={true} fullWidth={true}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={this.handleChangePassword}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth={true}
            variant="contained"
            color="primary"
            className={this.props.classes.submit}
          >
            Register
          </Button>
        </form>
      </Paper>
    )
  }

  private onRegisterSuccess(data: RegisterResult) {
    if (data.success) {
      this.props.history.push('/')
      this.props.createAlert({ variant: 'success', message: 'Register succeeded' })
    } else {
      this.props.createAlert({ variant: 'error', message: data.errors.join('\n') })
    }
  }

  private onRegisterFailure(error: string) {
    this.props.createAlert({ variant: 'error', message: error })
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.handleSubmit(
      {
        name: this.state.username,
        password: this.state.password,
      },
      this.onRegisterSuccess,
      this.onRegisterFailure,
    )
  }

  private handleChangeUsername(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({
      username: event.currentTarget.value,
    })
  }

  private handleChangePassword(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({
      password: event.currentTarget.value,
    })
  }
}

export default withRouter(withStyles(styles)(Register))
