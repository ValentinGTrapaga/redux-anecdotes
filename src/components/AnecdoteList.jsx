import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdoteSv } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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

  const vote = (anecdote) => {
    dispatch(voteAnecdoteSv(anecdote))
    const message = `You voted '${anecdote.content}'`
    dispatch(setNotification(message, 5000))
  }
  return (
    <>
      {anecdotesArr.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}
