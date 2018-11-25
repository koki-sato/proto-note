import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { actions } from '../actions'
import Login from '../components/Login'
import { State } from '../store'

const mapStateToProps = (state: { app: State }) => ({
  isLoggedIn: state.app.isLoggedIn,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createAlert: bindActionCreators(actions, dispatch).alertOpen,
  handleSubmit: bindActionCreators(actions, dispatch).login,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
