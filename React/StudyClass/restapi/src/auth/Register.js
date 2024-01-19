import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("")
  const [loginid, setLoginid] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        // "http://15.164.214.143:4000/api/auth/register",
        "http://localhost:4000/api/auth/register",
        {
          username,
          loginid,
          password,
        }
      )
      console.log(response.data)

      if (response.status === 200) {
        alert(`${username}님, 회원가입을 축하합니다!`)
        navigate("/login")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h2>회원가입</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Login ID:
        <input
          type="text"
          value={loginid}
          onChange={(e) => setLoginid(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleRegister}>회원가입</button>
    </>
  )
}

export default Register
