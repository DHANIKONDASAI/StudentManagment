import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [loginUser, setloginUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    function HandleChange(e) {
        setloginUser({
            ...loginUser,
            [e.target.name]: e.target.value
        });
    }

    async function submitDetails() {

        try {

            console.log("Sending Login Data:", loginUser);

            const res = await axios.post(
                "http://localhost:8080/api/faculty/login",
                loginUser
            );

            console.log("Response:", res.data);

            alert("User Login Successful");

            localStorage.setItem(
                "user",
                JSON.stringify(res.data)
            );

            navigate('/dashboard');

        } catch (err) {

            console.error("Login Error:", err);

            alert("Invalid Email or Password");
        }
    }

    return (
        <div className="Third-div">

            <h1>Login Here</h1>

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={HandleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={HandleChange}
            />

            <button onClick={submitDetails}>
                Submit
            </button>

            <a href="/">
                Don't Have An Account?
            </a>

        </div>
    );
}

export default Login;