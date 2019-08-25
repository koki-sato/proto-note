import * as React from 'react'

import NoteList from '../containers/NoteList'
import { State as AppState } from '../store'
import Title from './Title'

interface Props {
  isLoggedIn: AppState['isLoggedIn']
}

const Home: React.FC<Props> = (props: Props) => (props.isLoggedIn ? <NoteList /> : <Title />)

export default Home
