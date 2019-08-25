import * as React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { bindActionCreators, Dispatch } from 'redux'

import { ThemeProvider } from '@material-ui/styles'

import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/github.css'

import { actions, Actions } from './actions'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Title from './components/Title'
import Alert from './containers/Alert'
import Header from './containers/Header'
import Home from './containers/Home'
import Login from './containers/Login'
import NoteCreate from './containers/NoteCreate'
import NoteList from './containers/NoteList'
import NoteShow from './containers/NoteShow'
import Register from './containers/Register'
import { State } from './store'
import { theme } from './styles'

interface Props {
  isInitialized: State['isInitialized']
  sessionCheck: Actions['session']
}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
    this.props.sessionCheck()
  }

  public render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            {this.props.isInitialized ? (
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/register" exact={true} component={Register} />
                <Route path="/notes" exact={true} component={NoteList} />
                <Route path="/notes/create" exact={true} component={NoteCreate} />
                <Route path="/notes/:uuid" exact={true} component={NoteShow} />
                <Route component={Title} />
              </Switch>
            ) : (
              <Loading />
            )}
            <Alert />
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state: { app: State }) => ({
  isInitialized: state.app.isInitialized
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  sessionCheck: bindActionCreators(actions, dispatch).session
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
