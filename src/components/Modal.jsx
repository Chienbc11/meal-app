import React from 'react'
import { useGlobalContext } from '../context'

function Modal() {
  const { selectedMeal, setShowModal, setSelectedMeal} = useGlobalContext()
  const {strMealThumb: img, strMeal: name, strInstructions: description, strSource: foodLink} = selectedMeal


  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>Cooking Instruction</h3>
        <p>{description}</p>
        <a href={foodLink} target='_blank'>Original Source</a>
        <button onClick={() => {
          setSelectedMeal({})
          setShowModal(false)}}>Close</button>
      </div>
    </div>
  )
}

export default Modal