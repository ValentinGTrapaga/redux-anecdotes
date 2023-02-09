import React from 'react'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

export const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const create = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    const newAnecdote = { content, votes: 0 }
    await dispatch(createNewAnecdote(newAnecdote))
    event.target.anecdote.value = ''
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input
            type='text'
            name='anecdote'
          />
        </div>
        <button>create</button>
      </form>
    </>
  )
}
