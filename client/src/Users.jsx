import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//reducers
import { getUser } from "./redux/userSlice";



function Users() {

  //dispatch
  const dispatch = useDispatch()
  
  //useSelector kuhaon ang data
  const user = useSelector(state => state.users.users)
  console.log("HOY",useSelector(state => state.users.users));



//pagfetch ug data gikan sa BACKEND
// ...

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
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <button className="btn btn-success btn-sm">Add +</button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            user.map(user => {
              return<tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <button className="btn btn-sm btn-warning">Update</button>
                      <button>Delete</button>
                    </td>
              </tr>
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
