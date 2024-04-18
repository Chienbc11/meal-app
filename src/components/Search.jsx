import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { ALL_MEALS_URL, RANDOM_MEAL_URL } from '../constants'

function Search() {
  const [text, setText] =useState('')
  const { setMealSearch, fetchMeals } = useGlobalContext()
  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
      setMealSearch(text)
      setText('')
    }
  }
  const handleRandomMeal = () => {
    fetchMeals(RANDOM_MEAL_URL)
  }
  const handleShowAllMeals = () => {
    fetchMeals(ALL_MEALS_URL)
  }

  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Type your food...' value={text} onChange={handleInputChange}/>
        <button className='btn btn-search' type='submit'>Search</button>
        <button onClick={handleRandomMeal} className='btn btn-random' type='button'>Random Meal</button>
        <button onClick={handleShowAllMeals} className='btn' type='button'>Show All Meal</button>
      </form>
    </div>
  )
}

export default Search