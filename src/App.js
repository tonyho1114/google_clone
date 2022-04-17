import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routess from './components/Routess'

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : '' }>
      <div className='bg-gray-100 min-h-screen dark:bg-black dark:text-gray-200'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routess />
        <Footer />
      </div>
    </div>
  )
}
