import { useState, Fragment } from 'react'
import './App.css'
import SimpleMenu from './SimpleMenu.tsx'
import SimpleButton from './SimpleButton/SimpleButton.tsx'
import SimpleContainer from './SimpleContainer/SimpleContainer.tsx'

function App() {
  return (
    <>
      <SimpleMenu></SimpleMenu>
      <SimpleContainer rows={6} cols={3} gap={2}>
          <SimpleButton size="l"></SimpleButton>
          <SimpleButton size="l" opacity="20"></SimpleButton>
          <SimpleButton size="l" whiteBg></SimpleButton>
          <SimpleButton flavor="secondary" size="m"></SimpleButton>
          <SimpleButton flavor="secondary" size="m" opacity="20"></SimpleButton>
          <SimpleButton flavor="secondary" size="m" whiteBg></SimpleButton>
          <SimpleButton flavor="success" roundness="pill" size="m"></SimpleButton>
          <SimpleButton flavor="success" size="m" opacity="20"></SimpleButton>
          <SimpleButton flavor="success" size="m" whiteBg></SimpleButton>
          <SimpleButton flavor="danger" size="s"></SimpleButton>
          <SimpleButton flavor="danger" size="s" opacity="20"></SimpleButton>
          <SimpleButton flavor="danger" size="s" whiteBg></SimpleButton>
          <SimpleButton flavor="warning" size="s"></SimpleButton>
          <SimpleButton flavor="warning" size="s" opacity="20"></SimpleButton>
          <SimpleButton flavor="warning" size="s" whiteBg></SimpleButton>
          <SimpleButton flavor="info"></SimpleButton>
          <SimpleButton flavor="info" opacity="20"></SimpleButton>
          <SimpleButton flavor="info" whiteBg></SimpleButton>
      </SimpleContainer>
    </>
  )
}

export default App
