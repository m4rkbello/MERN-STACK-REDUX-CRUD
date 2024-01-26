import axios from "axios";
import { useState } from "react";
//redux-userSlice
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";

//useNavigate after ma click ang button mo adto sa home
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateUser() {

//useState
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();

    const dispatch = useDispatch()
    const navigate = useNavigate() 

//function para e pasa ang data sa serverfile



const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://127.0.0.1:3000/create', { name, email, age });
        dispatch(addUser(response.data));
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
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
            <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            id="name"
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
                    onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
            </div >
        </div >
     );
}

export default CreateUser;