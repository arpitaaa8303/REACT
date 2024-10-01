import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from 'react/jsx-runtime.js'



function fun() {
  return _jsx('h1', { children: 'Hello world' });
}

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}


// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://www.google.com',
//       target:'_blank',
//   },
//   children:'click me to visit the google'
// }



const anotherElement = (
  <a href='http://www.google.com'  target='_blank'>visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'click me to visit the google',
  anotherElement,

)




createRoot(document.getElementById('root')).render(
  
  reactElement,
 fun()

)  
