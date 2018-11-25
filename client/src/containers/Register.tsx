import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { actions } from '../actions'
import Register from '../components/Register'
import { State } from '../store'

const mapStateToProps = (state: { app: State }) => ({
  isLoggedIn: state.app.isLoggedIn,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createAlert: bindActionCreators(actions, dispatch).alertOpen,
  handleSubmit: bindActionCreators(actions, dispatch).register,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register)
