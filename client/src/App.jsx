import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import { useDispatch} from 'react-redux'
import { getUser } from './redux/userSlice'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

    //dispatch
    const dispatch = useDispatch()
  

//pagfetch ug data gikan sa BACKEND
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000');
      console.log("Axios Response:", response);
      dispatch(getUser(response.data));
    } catch (err) {
      console.error("AxiosError:", err.message);
    }
  };

  fetchData();
}, []);

  return (
    <div>
      <Router>
      <ToastContainer />
        <Routes>
          <Route exact path='/' element={<Users />} />
          <Route exact path='/create' element={<CreateUser />} />
          <Route exact path='/update/:id' element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
