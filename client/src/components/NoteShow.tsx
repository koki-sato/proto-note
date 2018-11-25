import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'

import { Actions } from '../actions'
import { State as AppState } from '../store'
import { styles, Styles } from '../styles/NoteShow'
import { NoteShowResult } from '../types'
import Loading from './Loading'

interface Props extends RouteComponentProps<{ uuid: string }>, WithStyles<Styles> {
  isLoading: AppState['isLoading']
  isLoggedIn: AppState['isLoggedIn']
  createAlert: Actions['alertOpen']
  getNote: Actions['noteShow']
}

interface State {
  note: NoteShowResult['data'] | null
}

class NoteShow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      note: null,
    }

    if (!this.props.isLoggedIn) {
      this.props.history.replace('/login')
      this.props.createAlert({ variant: 'error', message: 'Login required' })
    }
    this.onNoteShowSuccess = this.onNoteShowSuccess.bind(this)
    this.onNoteShowFailure = this.onNoteShowFailure.bind(this)
    this.props.getNote(this.props.match.params.uuid, this.onNoteShowSuccess, this.onNoteShowFailure)
  }

  public render() {
    return this.props.isLoading ? (
      <Loading />
    ) : this.state.note ? (
      <div className={this.props.classes.container}>
        <Typography component="h2" variant="h3" className={this.props.classes.typography}>
          {this.state.note.title}
        </Typography>
        <div className={this.props.classes.body}>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: this.state.note.body }}
          />
        </div>
      </div>
    ) : null
  }

  private onNoteShowSuccess(data: NoteShowResult) {
    if (data.success) {
      this.setState({ note: data.data })
    } else {
      this.props.createAlert({ variant: 'error', message: data.errors.join('\n') })
    }
  }

  private onNoteShowFailure(error: string) {
    this.props.createAlert({ variant: 'error', message: error })
  }
}

export default withRouter(withStyles(styles)(NoteShow))
