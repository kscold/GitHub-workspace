// src/components/map.js

// import React, { useState, useEffect } from "react"

// const { kakao } = window

// function Map() {
//   const [map, setMap] = useState(null)
//   const [marker, setMarker] = useState(null)
//   const [infoWindow, setInfoWindow] = useState(null)

//   useEffect(() => {
//     const container = document.getElementById("map") // 지도를 담을 영역의 DOM 레퍼런스
//     const options = {
//       center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974), // 지도의 중심좌표.
//       level: 3,
//     }
//     const map = new kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴
//     setMap(map)

//     // 마커가 표시될 위치
//     const markerPosition = new kakao.maps.LatLng(
//       37.62197524055062,
//       127.16017523675508
//     )

//     // 마커를 생성
//     const marker = new kakao.maps.Marker({
//       position: markerPosition,
//     })
//     setMarker(marker)

//     // 마커를 지도 위에 표시
//     marker.setMap(map)

//     // 인포윈도우에 표출될 내용
//     const iwContent = '<div style="padding:5px;">Hello World!</div>'

//     // 인포윈도우를 생성
//     const infoWindow = new kakao.maps.InfoWindow({
//       content: iwContent,
//     })
//     setInfoWindow(infoWindow)

//     // 마커 클릭 시 인포윈도우 열고 닫기
//     kakao.maps.event.addListener(marker, "click", function () {
//       if (infoWindow.getMap()) {
//         infoWindow.close()
//       } else {
//         infoWindow.open(map, marker)
//       }
//     })
//   }, [])

//   return <div id="map" style={{ width: "500px", height: "500px" }}></div>
// }

// export default Map

// import React, { useState, useEffect } from "react"

// import { axios } from "axios"

// const { kakao } = window
// function Map() {
//   const [map, setMap] = useState(null)
//   const [marker, setMarker] = useState(null)
//   const [infoWindow, setInfoWindow] = useState(null)

//   useEffect(() => {
//     const container = document.getElementById("map")
//     const options = {
//       center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
//       level: 3,
//     }
//     const map = new kakao.maps.Map(container, options)
//     setMap(map)

//     const fetchLocation = () => {
//       // 예시: 백엔드에서 받은 데이터
//       const backendData = {
//         lat: 37.62197524055062,
//         lng: 127.16017523675508,
//         info: "Hello World!",
//       }

//       // 마커가 표시될 위치
//       const markerPosition = new kakao.maps.LatLng(
//         backendData.lat,
//         backendData.lng
//       )

//       // 마커를 생성
//       const marker = new kakao.maps.Marker({
//         position: markerPosition,
//       })
//       setMarker(marker)

//       // 마커를 지도 위에 표시
//       marker.setMap(map)

//       // 인포윈도우에 표출될 내용
//       const iwContent = `<div style="padding:5px;">${backendData.info}</div>`

//       // 인포윈도우를 생성
//       const infoWindow = new kakao.maps.InfoWindow({
//         content: iwContent,
//       })
//       setInfoWindow(infoWindow)

//       // 마커 클릭 시 인포윈도우 열고 닫기
//       kakao.maps.event.addListener(marker, "click", function () {
//         if (infoWindow.getMap()) {
//           infoWindow.close()
//         } else {
//           infoWindow.open(map, marker)
//         }
//       })
//     }

//     fetchLocation() // 위치 데이터를 가져오고 설정
//   }, [])

//   return <div id="map" style={{ width: "500px", height: "500px" }}></div>
// }

// export default Map

// import React, { useState, useEffect } from "react"
// import axios from "axios"

// const { kakao } = window

// function Map() {
//   const [map, setMap] = useState(null)
//   const [marker, setMarker] = useState(null)
//   const [infoWindow, setInfoWindow] = useState(null)
//   const [userInput, setUserInput] = useState("") // 사용자 입력을 저장하는 상태

//   // 위치 검색 함수
//   const searchLocation = async () => {
//     // 사용자 입력을 가져와서 백엔드로 전달
//     const response = await axios.post("http://localhost:4000/get", {
//       place: userInput,
//     })

//     if (response.status === 200) {
//       const backendData = response.data

//       // 기존 마커가 있으면 삭제
//       if (marker) {
//         marker.setMap(null)
//       }

//       // 마커가 표시될 위치
//       const markerPosition = new kakao.maps.LatLng(
//         backendData.lat,
//         backendData.lng
//       )

//       // 마커를 생성
//       const newMarker = new kakao.maps.Marker({
//         position: markerPosition,
//       })
//       setMarker(newMarker)

//       // 마커를 지도 위에 표시
//       newMarker.setMap(map)

//       // 인포윈도우에 표출될 내용
//       const iwContent = `<div style="padding:5px;">${backendData.info}</div>`

//       // 인포윈도우를 생성
//       const infoWindow = new kakao.maps.InfoWindow({
//         content: iwContent,
//       })
//       setInfoWindow(infoWindow)

//       // 마커 클릭 시 인포윈도우 열고 닫기
//       kakao.maps.event.addListener(newMarker, "click", function () {
//         if (infoWindow.getMap()) {
//           infoWindow.close()
//         } else {
//           infoWindow.open(map, newMarker)
//         }
//       })
//     }
//   }

//   // 사용자 입력이 변경될 때마다 상태 업데이트
//   const handleUserInputChange = (event) => {
//     setUserInput(event.target.value)
//   }

//   useEffect(() => {
//     const container = document.getElementById("map")
//     const options = {
//       center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
//       level: 3,
//     }
//     const map = new kakao.maps.Map(container, options)
//     setMap(map)
//   }, [])

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter location"
//         value={userInput}
//         onChange={handleUserInputChange}
//       />
//       <button onClick={searchLocation}>Search Location</button>
//       <div id="map" style={{ width: "500px", height: "500px" }}></div>
//     </div>
//   )
// }

// export default Map

import React, { useState, useEffect } from "react"
import axios from "axios"

const { kakao } = window

function Map() {
  const [map, setMap] = useState(null)
  const [marker, setMarker] = useState(null)
  const [infoWindow, setInfoWindow] = useState(null)
  const [userInput, setUserInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const searchLocation = async () => {
    setLoading(true)
    setMessage("데이터를 받는 중입니다...")

    const response = await axios.post("http://localhost:4000/get", {
      place: userInput,
    })

    if (response.status === 200) {
      const backendData = response.data
      setLoading(false)
      setMessage("요청한 위치 데이터에 마커가 생겼습니다")
      console.log(backendData)
      console.log(backendData.LAT)

      if (marker) {
        marker.setMap(null)
      }

      const markerPosition = new kakao.maps.LatLng(
        backendData.LAT,
        backendData.LNG
      )

      const newMarker = new kakao.maps.Marker({
        position: markerPosition,
      })
      setMarker(newMarker)

      newMarker.setMap(map)

      const iwContent = `<div style="padding:5px;">온도${backendData.TEMP}<br></br>체감 온도${backendData.SENSIBLE_TEMP}</div>`

      const infoWindow = new kakao.maps.InfoWindow({
        content: iwContent,
      })
      setInfoWindow(infoWindow)

      kakao.maps.event.addListener(newMarker, "click", function () {
        if (infoWindow.getMap()) {
          infoWindow.close()
        } else {
          infoWindow.open(map, newMarker)
        }
      })
    }
  }

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value)
  }

  useEffect(() => {
    const container = document.getElementById("map")
    const options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)
    setMap(map)
  }, [])

  useEffect(() => {
    if (marker) {
      marker.setMap(map)
    }
  }, [marker, map])

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location"
        value={userInput}
        onChange={handleUserInputChange}
      />
      <button onClick={searchLocation}>위치 검색</button>
      <div id="map" style={{ width: "500px", height: "500px" }}></div>
      {loading && <p>{message}</p>}
    </div>
  )
}

export default Map
