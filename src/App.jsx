import './App.css'
import Favorite from './components/Favorite'
import Meals from './components/Meals'
import Modal from './components/Modal'
import Search from './components/Search'
import { useGlobalContext } from './context'

function App() {
  const { showModal, favoriteFood} = useGlobalContext()

  return (
    <div className='app-container'>
      <Search />
      {favoriteFood.length > 0 && <Favorite/>}
      <Meals />
      { showModal && <Modal />}
    </div>
  )
}

export default App
