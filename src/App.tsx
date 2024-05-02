import { useSelector, useDispatch } from 'react-redux'

import './App.css'
import { RootState } from './store'
import { TableState } from '@tanstack/react-table'

function App() {
  const tables = useSelector((state: RootState) => state.tables)

  return (
    <div className='App'>
      <h2>Tables</h2>
      <nav>
        <ul></ul>
      </nav>
      {tables.map(({ id, type }) => {
        return (
          <li>
            <a key={id} href={`/contacts/1`}>
              {type}
            </a>
          </li>
        )
      })}
    </div>
  )
}

export default App
