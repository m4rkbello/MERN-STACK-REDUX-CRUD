import axios from "axios";
import { useState } from "react";
//redux-userSlice
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";

//useNavigate after ma click ang button mo adto sa home
import { useNavigate } from "react-router-dom";

function CreateUser() {

//useState
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();

    const dispatch = useDispatch()
    const navigate = useNavigate() 

//function para e pasa ang data sa serverfile
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:3000/create', {name, email, age})
        .then(res => {
            dispatch(addUser(res.data))
            navigate('/')
            console.log(res)
        })
        .catch(err => console.log(err))
    }


    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
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