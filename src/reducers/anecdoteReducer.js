import { createSlice } from '@reduxjs/toolkit'
import {
  getAnecdotes,
  voteAnecdoteServer,
  createNew
} from '../services/anecdotes'

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteOne(state, action) {
      const { id } = action.payload
      return state.map((anecdote) => {
        if (anecdote.id === id) {
          return { ...anecdote, votes: anecdote.votes + 1 }
        }
        return anecdote
      })
    },
    createAnecdote(state, action) {
      return [...state, action.payload]
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAnecdotes()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await createNew(content)
    dispatch(createAnecdote(newAnecdote))
  }
}

export const voteAnecdoteSv = (anecdote) => {
  return async (dispatch) => {
    console.log(anecdote)
    const votedAnecdote = await voteAnecdoteServer(anecdote)
    console.log(votedAnecdote)
    dispatch(voteOne(votedAnecdote))
  }
}

export default anecdotesSlice.reducer
export const { voteOne, createAnecdote, setAnecdotes } = anecdotesSlice.actions
