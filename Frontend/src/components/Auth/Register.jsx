import React, { useContext, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { FaPencilAlt, FaPhoneSquareAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Line } from "react-icons/ri";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        {
          name, email, password, phone, role
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPhone("");
      setRole("");
      setPassword("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={'/'}/>
  }

  return (
    <div className="authPage">
      <div className="container">
        <div className="header">
          <img src="/profile_icon.png" alt="" />
          <h3>Register Account</h3>
        </div>
        <form>
          <div className="inputTag">
            <label>Register As</label>
            <div>
              <select value={role} onChange={(e)=> setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
              <FaRegUser/>
            </div>
          </div>

          <div className="inputTag">
            <label>Name</label>
            <div>
              <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Deepmoina" />
              <FaPencilAlt/>
            </div>
          </div>
          
          <div className="inputTag">
            <label>Email</label>
            <div>
              <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="abc@gmail.com" />
              <MdOutlineMailOutline/>
            </div>
          </div>
          
          <div className="inputTag">
            <label>Phone Number</label>
            <div>
              <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="123456789" />
              <FaPhoneSquareAlt/>
            </div>
          </div>

          <div className="inputTag">
            <label>Password</label>
            <div>
              <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
              <RiLock2Line/>
            </div>
          </div>
           <button onClick={handleRegister} type="submit">Register</button>
           <Link to={'/login'} type="submit">Login Now</Link>
        </form>
      </div>
      <div className="banner">
        <img src="/register.png" alt="register" />
      </div>
    </div>
  )
};
export default Register;