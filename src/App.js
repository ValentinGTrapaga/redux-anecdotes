import { useEffect } from 'react'
import { AnecdoteForm } from './components/AnecdoteForm'
import { AnecdoteList } from './components/AnecdoteList'
import { Filter } from './components/Filter'
import Notification from './components/Notification'
import { useSelector, useDispatch } from 'react-redux'

import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const notification = useSelector(({ notification }) => notification)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      {notification.length !== 0 && <Notification />}
      <AnecdoteList />
      <AnecdoteForm />
      <Filter />
    </div>
  )
}

export default App
