import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { actions } from '../actions'
import NoteShow from '../components/NoteShow'
import { State } from '../store'

const mapStateToProps = (state: { app: State }) => ({
  isLoading: state.app.isLoading,
  isLoggedIn: state.app.isLoggedIn
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createAlert: bindActionCreators(actions, dispatch).alertOpen,
  getNote: bindActionCreators(actions, dispatch).noteShow
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow)
