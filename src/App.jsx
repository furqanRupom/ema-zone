import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Content from './components/Content/Content'

function App() {


  return (
    <div className="max-w-7xl mx-auto px-4">
      <Header />
      <Content />
    </div>
  )
}

export default App
