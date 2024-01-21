import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function Users() {

//pagfetch ug data gikan sa BACKEND
useEffect(() => {
  const fetchData = async() => {
    try {
      const response = await axios.get("");
    } catch(err){
        console.log(err)
    }   
  }
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
          <tbody>{/* Add your table rows here */}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
