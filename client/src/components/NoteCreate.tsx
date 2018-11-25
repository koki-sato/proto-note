import * as hljs from 'highlight.js'
import * as marked from 'marked'
import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { Button, Grid, TextField } from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'

import { Actions } from '../actions'
import { State as AppState } from '../store'
import { styles, Styles } from '../styles/NoteCreate'
import { NoteCreateResult } from '../types'

marked.setOptions({
  highlight: (code: string, lang: string = 'plaintext') =>
    hljs.getLanguage(lang) ? hljs.highlight(lang, code).value : code,
  sanitize: true,
})

interface Props extends RouteComponentProps, WithStyles<Styles> {
  isLoggedIn: AppState['isLoggedIn']
  createAlert: Actions['alertOpen']
  handleSubmit: Actions['noteCreate']
}

interface State {
  title: string
  markdown: string
  body: string
}

class NoteCreate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      title: '',
      markdown: '',
      body: '',
    }

    if (!this.props.isLoggedIn) {
      this.props.history.replace('/login')
      this.props.createAlert({ variant: 'error', message: 'Login required' })
    }
    this.onNoteCreateSuccess = this.onNoteCreateSuccess.bind(this)
    this.onNoteCreateFailure = this.onNoteCreateFailure.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChamgeTitle = this.handleChamgeTitle.bind(this)
    this.handleChamgeMarkdown = this.handleChamgeMarkdown.bind(this)
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container={true} spacing={0} className={this.props.classes.container}>
          <Grid item={true} xs={12} className={this.props.classes.item}>
            <TextField
              fullWidth={true}
              autoFocus={true}
              required={true}
              placeholder="Title"
              InputProps={{ className: this.props.classes.title }}
              onChange={this.handleChamgeTitle}
            />
          </Grid>
          <Grid item={true} xs={6} className={this.props.classes.item}>
            <TextField
              fullWidth={true}
              multiline={true}
              rows={30}
              required={true}
              placeholder="Markdown body"
              InputProps={{ className: this.props.classes.markdown }}
              value={this.state.markdown}
              onChange={this.handleChamgeMarkdown}
            />
          </Grid>
          <Grid item={true} xs={6} className={this.props.classes.item}>
            <div
              className={`${this.props.classes.body} markdown-body`}
              dangerouslySetInnerHTML={{ __html: this.state.body }}
            />
          </Grid>
          <Button type="submit" className={this.props.classes.register}>
            Post
          </Button>
        </Grid>
      </form>
    )
  }

  private onNoteCreateSuccess(data: NoteCreateResult) {
    if (data.success) {
      this.props.history.push('/')
      this.props.createAlert({ variant: 'success', message: 'Successfully created a note' })
    } else {
      this.props.createAlert({ variant: 'error', message: data.errors.join('\n') })
    }
  }

  private onNoteCreateFailure(error: string) {
    this.props.createAlert({ variant: 'error', message: error })
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.handleSubmit(
      {
        title: this.state.title,
        markdown: this.state.markdown,
        body: this.state.body,
      },
      this.onNoteCreateSuccess,
      this.onNoteCreateFailure,
    )
  }

  private handleChamgeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      title: event.currentTarget.value,
    })
  }

  private handleChamgeMarkdown(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      markdown: event.currentTarget.value,
      body: marked(event.currentTarget.value),
    })
  }
}

export default withRouter(withStyles(styles)(NoteCreate))
