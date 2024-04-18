import React, { useContext, useEffect, useState } from 'react'
import fakeStore from '../apis'
import { ALL_MEALS_URL } from '../constants'

const AppContext = React.createContext()

export const useGlobalContext = () => {
  return useContext(AppContext)
}

function AppProvider({ children }) {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [showModal, setShowModal] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState({})
  const selectMeal = (id) => {
    const meal = meals.find(meal => meal.idMeal === id)
    setSelectedMeal(meal)
    setShowModal(true)
  }

  const [favoriteFood, setFavoriteFood] =useState([])
  const addMealToFavoriteFood = (id) => {
    const meal = meals.find(meal => meal.idMeal === id)
    const alreadyFavorite = favoriteFood.find(meal => meal.idMeal === id)
    if (alreadyFavorite) return
    const updatedFavoriteFood = [...favoriteFood, meal]
    setFavoriteFood(updatedFavoriteFood)
  }

  const removeMealFromFavoriteFood = (id) => {
    const updatedFavoriteFood = favoriteFood.filter(food => food.idMeal!== id)
    setFavoriteFood(updatedFavoriteFood)
  }

  const [mealSearch, setMealSearch] = useState('')
  console.log('mealSearch', mealSearch)

  const fetchMeals = async (url) => {
    setIsLoading(true)
    try {
      const response = await fakeStore().get(url)
      if (response.data) {
        setMeals(response.data.meals)
      }
    } catch (error) {
      console.log("error", error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMeals(ALL_MEALS_URL)
  }, [])

  useEffect(() => {
    if (mealSearch)
      fetchMeals(`${ALL_MEALS_URL}${mealSearch}`)
  }, [mealSearch])  

  return (
    <AppContext.Provider
      value={{
        isLoading,
        meals,
        selectMeal,
        selectedMeal,
        setSelectedMeal,
        showModal,
        setShowModal,
        addMealToFavoriteFood,
        favoriteFood,
        removeMealFromFavoriteFood,
        setMealSearch,
        fetchMeals,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider