import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Users() {

  //useSelector kuhaon ang data
  const users = useSelector(state => state.users.users)
  console.log("HOY",useSelector(state => state.users.users));

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
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
            users.map(user => {
              return<tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link to={`/update/${user.id}`} className="btn btn-sm btn-warning me-2">Update</Link>
                      <button className="btn btn-sm btn-danger me-2">Delete</button>
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
