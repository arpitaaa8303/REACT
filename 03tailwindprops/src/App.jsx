// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {  
 let myObj= {
   channel: "shoes brand",
   items: ["Shoes1", "Shoes2", "Shoes3"]
 }

  return (
    <>
    <h1 className='bg-green-500 text-black'>Tailwind test</h1>
   <Card username="shoes brand" btntxt="click me" />
   <Card  username="channel" btntxt="visit me"/>
    </>
  )
}


export default App
