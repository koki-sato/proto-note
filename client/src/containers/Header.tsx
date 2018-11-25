import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { actions } from '../actions'
import Header from '../components/Header'
import { State } from '../store'

const mapStateToProps = (state: { app: State }) => ({
  isInitialized: state.app.isInitialized,
  isLoggedIn: state.app.isLoggedIn,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createAlert: bindActionCreators(actions, dispatch).alertOpen,
  onClickLogout: bindActionCreators(actions, dispatch).logout,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
