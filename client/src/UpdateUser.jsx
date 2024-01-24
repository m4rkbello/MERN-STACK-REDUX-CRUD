import axios from "axios";
import { useState } from "react";
//redux-userSlice
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";

//useNavigate after ma click ang button mo adto sa home
import { useNavigate, useParams } from "react-router-dom";


//magfetch ug data
import { useSelector } from "react-redux";

function UpdateUser() {
    //makuha ang id 
    const {id} = useParams()
    const users = useSelector(state => users.users)
    const user = users.find(u => u.id === id)
    console.log(user)

    //useState
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();

    const dispatch = useDispatch()
    const navigate = useNavigate() 

//function para e pasa ang data sa serverfile
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get('http://127.0.0.1:3000/create', {name, email, age})
        .then(res => {
            dispatch(addUser(res.data))
            navigate('/')
            console.log(res)
        })
        .catch(err => console.log(err))
    }


    return ( 
        <div>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Update User</h2>
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
        </div>
     );
}

export default UpdateUser;