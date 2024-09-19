import { useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { NewsBoard } from './components/NewsBoard.jsx'


export default function App() {

  const [category, setCategory] = useState('general');



  return (
    <>
     <Navbar setCategory={setCategory} />
     <NewsBoard category={category} />
    </>
  )
}