import { useState } from "react";
import axios from "axios";
import "../App.css";

function Register() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        department: ""
    });

    function HandleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    async function submitForm() {

        try {

            console.log("Sending Data:", data);

            const res = await axios.post(
                "http://localhost:8080/api/faculty/register",
                data
            );

            console.log("Response:", res.data);

            alert("User Registered Successfully");

            setData({
                name: "",
                email: "",
                password: "",
                department: ""
            });

        } catch (err) {

            console.error("Full Error:", err);

            if (err.response) {

                console.log("Status:", err.response.status);
                console.log("Data:", err.response.data);

                alert(
                    "Backend Error: " +
                    JSON.stringify(err.response.data)
                );

            } else {

                alert("Error: " + err.message);
            }
        }
    }

    return (
        <div className="Third-div">

            <h1>Register Here</h1>

            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={data.name}
                onChange={HandleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={data.email}
                onChange={HandleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={data.password}
                onChange={HandleChange}
            />

            <input
                type="text"
                name="department"
                placeholder="Enter Department"
                value={data.department}
                onChange={HandleChange}
            />

            <button onClick={submitForm}>
                Submit
            </button>

            <a href="/login">
                Already Have An Account
            </a>

        </div>
    );
}

export default Register;