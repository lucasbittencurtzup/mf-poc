import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [commonState, setCommonState] = useState({})

  const handleCommonState = (e) => {
    setCommonState(e.detail)
  }

  window.addEventListener('common-state', handleCommonState);

  useEffect(() => {  
    const requestStateEvent = new CustomEvent('request-state');
    window.dispatchEvent(requestStateEvent) 
    
    return () => {
      window.removeEventListener('common-state', handleCommonState)
    }
  }, []);

  return (
    <>
      <hr />
        <h1>MF Example</h1>
        { commonState && <p>UserId: {commonState.userId}</p> }
      <hr />
    </>
  )
}

export default App
