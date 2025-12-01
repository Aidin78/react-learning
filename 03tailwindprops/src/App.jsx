// import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl mb-10'>Vite with Tailwind</h1>
      <hr className='mb-10' />
      <div className="flex flex-col gap-2">
        <Card title="First Card" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" image="https://images.pexels.com/photos/2354163/pexels-photo-2354163.jpeg" />
        
        <Card title="Second Card" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" image="https://images.pexels.com/photos/33753752/pexels-photo-33753752.jpeg" />
        
        <Card title="Third Card" desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam" image="https://images.pexels.com/photos/33021032/pexels-photo-33021032.jpeg" />
      </div>
    </>
  )
}

export default App
