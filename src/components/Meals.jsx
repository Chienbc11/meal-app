import React from 'react'
import { useGlobalContext } from '../context'
import {FaRegThumbsUp} from 'react-icons/fa'

function Meals() {
  const { isLoading, meals, selectMeal, addMealToFavoriteFood } = useGlobalContext()
  console.log("isLoading", isLoading)
  console.log("meals", meals)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (meals?.length < 1) {
    return <div>No meals</div>
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 20,
    }}>
      {
        meals.map(meal => {
          const { idMeal: id, strMeal: name, strMealThumb: image } = meal
          return (
            <div key={id}
              style={{
                cursor: 'pointer',
                display: 'flex,',
                flexDirection: 'column',
                gap: '10px',
                border: '1px solid gray',
                borderRadius: '10px',
                padding: '10px',
              }}>
              <img 
                onClick={() => selectMeal(id)}
                src={image} alt="" style={{
                width: '100%',
                height: '300px',
              }}/>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <p style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}>{name}</p>
                <button style={{
                  cursor: 'pointer'
                }} onClick={() => addMealToFavoriteFood(id)}><FaRegThumbsUp /></button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Meals