import { useState, Fragment } from 'react'
import './App.css'
import SimpleMenu from './SimpleMenu.tsx'
import SimpleButton from './SimpleButton/SimpleButton.tsx'
//import SimpleContainer from './SimpleButton/SimpleContainer.tsx'

function App() {
  return (
    <>
      <SimpleMenu></SimpleMenu>
          <SimpleButton flavor="primary"></SimpleButton>
          <SimpleButton flavor="secondary"></SimpleButton>
          <SimpleButton flavor="success"></SimpleButton>
          <SimpleButton flavor="danger"></SimpleButton>
          <SimpleButton flavor="warning"></SimpleButton>
          <SimpleButton flavor="info"></SimpleButton>
    </>
  )
}

export default App
