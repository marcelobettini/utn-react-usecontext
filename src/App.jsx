
import { useContext } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import { UserContext } from './context/UserContext'

function App() {
  const { user } = useContext(UserContext)


  return (
    <>
      <h1>App Component</h1>

      <p>{user?.name}</p>
      <p>{user?.lastName}</p>
      <p>{user?.email}</p>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <ComponentA user={user} />
        <ComponentB />
        <ComponentC user={user} />
      </div>
    </>
  )
}

export default App
