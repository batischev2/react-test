import { RootState } from './store'
import { Link } from 'react-router-dom'
import { useAppSelector } from './hooks'

import './App.css'

function App() {
  const tables = useAppSelector((state: RootState) => state.tables)

  return (
    <div className='App'>
      <h2>Tables</h2>
      <nav>
        {tables.map(({ id, type }) => {
          return (
            <div key={id}>
              <Link to={`/table/${id}`}>{type}</Link>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default App
