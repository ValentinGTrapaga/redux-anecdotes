import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

export const Filter = () => {
  const dispatch = useDispatch()

  const setFilter = (event) => {
    const filterString = event.target.value
    dispatch(filterAnecdotes(filterString))
  }

  return (
    <>
      Filter
      <input
        name='filterString'
        onChange={setFilter}
      />
    </>
  )
}
