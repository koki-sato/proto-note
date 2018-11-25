import { connect } from 'react-redux'

import Home from '../components/Home'
import { State } from '../store'

const mapStateToProps = (state: { app: State }) => ({
  isLoggedIn: state.app.isLoggedIn,
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
