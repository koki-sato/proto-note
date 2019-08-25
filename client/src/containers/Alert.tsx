import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { actions } from '../actions'
import Alert from '../components/Alert'
import { State } from '../store'

const mapStateToProps = (state: { app: State }) => ({
  isOpen: state.app.isAlertOpen,
  variant: state.app.alert ? state.app.alert.variant : 'info',
  message: state.app.alert ? state.app.alert.message : ''
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClose: bindActionCreators(actions, dispatch).alertClose
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert)
