import React from 'react'
import  ReactDom  from 'react-dom/client'
import App from './App.jsx'


const anotherUser = "chai our react"
const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me visit to google',
  anotherUser
)
ReactDom.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
