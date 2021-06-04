import React, { useEffect, useState } from 'react'
import './App.css'

type User = {
  userId?: string
}

function App() {
  const [commonState, setCommonState] = useState<User>({})

  const handleCommonState = (e: any) => {
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
      <div>MF Example 2 with TS</div>
      { commonState && <p>UserId: {commonState.userId}</p> }
    </>
  )
}

export default App
