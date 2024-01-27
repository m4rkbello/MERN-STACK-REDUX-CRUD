import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
import { deleteUser } from "./redux/userSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Users() {

  //useSelector kuhaon ang data
  const users = useSelector(state => state.users.users)
  console.log("HOY",useSelector(state => state.users.users));

  const dispatch = useDispatch();


  //pag-delete ug user
  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:3000/delete/${id}`)
    .then(res => {
   
      dispatch(deleteUser({ id }));
      toast.success('User deleted successfully!');

      console.log(res);
    }).catch(err =>{
      toast.error('User has been not deleted!');
      console.log((err));
    });
}



  return (
    <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
    <ToastContainer />
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm">
        Add +
        </Link>
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
            users.map((user, index) => {
              return<tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user.id}`} className="btn btn-sm btn-warning me-2">Update</Link>
                     <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger me-2">Delete</button>

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
