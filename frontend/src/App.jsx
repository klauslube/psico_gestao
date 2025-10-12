import { useState, useEffect } from 'react'
import api from './services/api'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState('Checking...')

  useEffect(() => {
    const checkAPI = async () => {
      try {
        const response = await api.get('/up')
        setApiStatus('API Connected!')
        console.log('API Response:', response.data)
      } catch (error) {
        setApiStatus('API Disconnected')
        console.error('API Error:', error)
      }
    }
    
    checkAPI()
  }, [])

  return (
    <div className="App">
      <h1>Psico Gestão</h1>
      <p>API Status: {apiStatus}</p>
      <p>Frontend: React + Vite</p>
      <p>Backend: Rails API</p>
    </div>
  )
}

export default App