import { AnecdoteForm } from './components/AnecdoteForm'
import { AnecdoteList } from './components/AnecdoteList'
import { Filter } from './components/Filter'
import Notification from './components/Notification'
import { useSelector } from 'react-redux'

const App = () => {
  const notification = useSelector(({ notification }) => notification)
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
