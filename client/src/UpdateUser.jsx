import axios from "axios";
import { useState } from "react";
//redux-userSlice
import { updateUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";

//useNavigate after ma click ang button mo adto sa home
import { useNavigate, useParams } from "react-router-dom";

//magfetch ug data
import { useSelector } from "react-redux";

//para sa notification //toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateUser() {
    //makuha ang id 
    const {id} = useParams()
    const users = useSelector(state => state.users.users)
    const user = users.find(u => u.id === id)
    console.log(user)

    //useState
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);

    const dispatch = useDispatch()
    const navigate = useNavigate() 

//function para e pasa ang data sa serverfile

const handleUpdate = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.put('http://127.0.0.1:3000/update/'+id, { name, email, age });
        dispatch(updateUser({id, name, email, age}));
        navigate('/users');
        toast.success('User added successfully!');
        console.log(response);
    } catch (error) {
        console.error("Error during request:", error);

        if (error.message === "Network Error") {
            toast.error('Failed to add user: Network Error. Please check your internet connection.');
        } else if (error.response) {
            toast.error(`Failed to add user: ${error.response.data.message}`);
        } else {
            toast.error('Failed to add user: An unexpected error occurred.');
        }
    }
};



    return ( 
        <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
        <ToastContainer />
            <form onSubmit={handleUpdate}>
                <h2>Update User</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="mb-2">
                <label htmlFor="">Age</label>
                <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <button className="btn btn-success">Update</button>
        </form>
        </div >
    </div >
        </div>
     );
}

export default UpdateUser;