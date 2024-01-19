import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [loginid, setLoginid] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault() // Prevent the default form submission behavior

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          loginid,
          password,
        },
        {
          withCredentials: true,
        }
      )

      console.log(response.headers)
      console.log(response.data)

      if (response.status === 200) {
        alert(`${response.data.username}님, 환영합니다!`)
        navigate("/")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">로그인</button>
      </form>
      <button onClick={() => navigate("/register")}>회원가입</button>
    </>
  )
}

export default Login
