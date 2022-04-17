import React from 'react'
import { Routes,Route,Navigate  } from 'react-router-dom'
import Results from './Results'

const Routess = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        {/* <Route path={['/search','images','/news','/videos']} element={<Results />}/> */}        
        {['/search','image','/news','/video'].map(path=>(
          <Route key="Result" path={path} element={<Results/>} />
        ))}
        
      </Routes>
    </div>
  )
}

export default Routess