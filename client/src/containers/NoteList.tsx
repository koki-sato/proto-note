import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { actions } from '../actions'
import NoteList from '../components/NoteList'
import { State } from '../store'

const mapStateToProps = (state: { app: State }) => ({
  isLoading: state.app.isLoading,
  isLoggedIn: state.app.isLoggedIn
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createAlert: bindActionCreators(actions, dispatch).alertOpen,
  getNotes: bindActionCreators(actions, dispatch).noteList
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)
