import * as React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'

import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { Note as NoteIcon } from '@material-ui/icons'

import { Actions } from '../actions'
import { State as AppState } from '../store'
import { styles, Styles } from '../styles/NoteList'
import { NoteListResult } from '../types'
import Loading from './Loading'

interface Props extends RouteComponentProps, WithStyles<Styles> {
  isLoading: AppState['isLoading']
  isLoggedIn: AppState['isLoggedIn']
  createAlert: Actions['alertOpen']
  getNotes: Actions['noteList']
}

interface State {
  notes: NoteListResult['data']
}

class NoteList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      notes: []
    }

    if (!this.props.isLoggedIn) {
      this.props.history.replace('/login')
      this.props.createAlert({ variant: 'error', message: 'Login required' })
    }
    this.onNoteListSuccess = this.onNoteListSuccess.bind(this)
    this.onNoteListFailure = this.onNoteListFailure.bind(this)
    this.props.getNotes(this.onNoteListSuccess, this.onNoteListFailure)
  }

  public render() {
    return this.props.isLoading ? (
      <Loading />
    ) : this.state.notes && this.state.notes.length > 0 ? (
      <div className={this.props.classes.container}>
        <Typography component="h2" variant="h3" className={this.props.classes.typography}>
          Notes
        </Typography>
        <List className={this.props.classes.list}>
          {this.state.notes.map((note, index) => (
            <ListItem divider={true} key={index}>
              <Link to={`/notes/${note.uuid}`} className={this.props.classes.link}>
                <ListItemIcon>
                  <NoteIcon />
                </ListItemIcon>
                <ListItemText primary={note.title} />
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    ) : (
      <div className={this.props.classes.container}>
        <Typography component="h2" variant="h3" className={this.props.classes.typography}>
          There are no notes
        </Typography>
      </div>
    )
  }

  private onNoteListSuccess(data: NoteListResult) {
    if (data.success) {
      this.setState({ notes: data.data })
    } else {
      this.props.createAlert({ variant: 'error', message: data.errors.join('\n') })
    }
  }

  private onNoteListFailure(error: string) {
    this.props.createAlert({ variant: 'error', message: error })
  }
}

export default withRouter(withStyles(styles)(NoteList))
