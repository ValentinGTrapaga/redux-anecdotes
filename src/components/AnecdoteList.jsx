import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

export const AnecdoteList = () => {
  const filterString = useSelector(({ filter }) => filter.toLowerCase())
  const dispatch = useDispatch()

  const anecdotes = useSelector(({ anecdotes }) => {
    if (filterString === '') {
      return anecdotes.sort((a, b) => b.votes - a.votes)
    } else {
      return anecdotes
        .filter((anecdote) =>
          anecdote.content.toLowerCase().includes(filterString)
        )
        .sort((a, b) => b.votes - a.votes)
    }
  })

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }
  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}
