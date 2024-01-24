import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'


function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Users />} />
          <Route exact path='/create' element={<CreateUser />} />
          <Route exact path='/update' element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
