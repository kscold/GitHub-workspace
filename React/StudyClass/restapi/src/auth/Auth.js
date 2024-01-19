// Auth.jsx
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Auth = () => {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/auth/check",
          // "http://15.164.214.143:4000/api/auth/check",
          {
            withCredentials: true,
          }
        )

        if (response.status === 200) {
          setUsername(response.data.username)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const logOut = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      )

      if (response.status === 204) {
        // 성공적으로 로그아웃했을 때
        setUsername("")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {username ? (
        <div>
          <p>{username}님, 환영합니다!</p>
          <button onClick={logOut}>로그아웃</button>
        </div>
      ) : (
        <div>
          <p>로그인이 필요합니다.</p>
          <button onClick={() => navigate("/login")}>로그인</button>
        </div>
      )}
    </div>
  )
}

export default Auth
