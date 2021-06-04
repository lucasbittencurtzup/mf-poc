import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [modules, setModules] = useState([])

  const fetchModules = async () => {
    const { data } = await axios.get('http://localhost:4000/modules')
    setModules(data)
    
    data.map(module => {
      const bundleScript = document.createElement("script");
      bundleScript.setAttribute("type", "module");
      bundleScript.src = module.url
      document.body.appendChild(bundleScript);

    })
  }

  const handleRequestState = () => {
    const commonStateEvent = new CustomEvent('common-state', { detail: { userId: 'zup01'} });
    window.dispatchEvent(commonStateEvent)
  }

  useEffect(() => {
    fetchModules()

    window.addEventListener('request-state', handleRequestState);
    
    return () => {
      window.removeEventListener('request-state', handleRequestState)
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Core App</h1>
        { modules.map(mod => <div key={mod.id} id={mod.moduleName} />) }
      </header>
    </div>
  )
}

export default App
