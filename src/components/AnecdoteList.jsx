import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationMessage } from '../reducers/notificationReducer'

export const AnecdoteList = () => {
  const filterString = useSelector(({ filter }) => filter.toLowerCase())
  const dispatch = useDispatch()

  const anecdotesArr = useSelector(({ anecdotes }) => {
    if (filterString === '') {
      return anecdotes.slice().sort((a, b) => b.votes - a.votes)
    } else {
      return anecdotes
        .slice()
        .filter((anecdote) =>
          anecdote.content.toLowerCase().includes(filterString)
        )
        .sort((a, b) => b.votes - a.votes)
    }
  })

  const vote = (id, content) => {
    dispatch(voteAnecdote(id))
    const message = `You voted '${content}'`
    dispatch(setNotificationMessage(message))
    setTimeout(() => {
      dispatch(setNotificationMessage(''))
    }, 5000)
  }
  return (
    <>
      {anecdotesArr.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  )
}
