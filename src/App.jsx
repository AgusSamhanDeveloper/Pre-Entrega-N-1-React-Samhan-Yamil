import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/navbar'


const App = () => {
  const curso = "REACT"
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenido a H&M SOLUTIONS"} /> 
    </div> 
  )
}

export default App