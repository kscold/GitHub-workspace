// // src/components/map.js
// import React, { useEffect } from "react"

// const { kakao } = window

// function Map() {
//   useEffect(() => {
//     const container = document.getElementById("map") //지도를 담을 영역의 DOM 레퍼런스
//     const options = {
//       //   center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
//       center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
//       level: 3,
//     }
//     const map = new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
//     //마커가 표시 될 위치
//     let markerPosition = new kakao.maps.LatLng(
//       37.62197524055062,
//       127.16017523675508
//     )

//     // 마커를 생성
//     let marker = new kakao.maps.Marker({
//       position: markerPosition,
//     })

//     // 마커를 지도 위에 표시
//     marker.setMap(map)
//   }, [])

//   return <div id="map" style={{ width: "500px", height: "500px" }}></div>
// }

// export default Map

// src/components/map.js
// import React, { useState, useEffect } from "react"

// const { kakao } = window

// function Map() {
//   const [isOpen, setIsOpen] = useState(false)

//   const handleMarkerClick = () => {
//     setIsOpen(true)
//     var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//       iwPosition = new kakao.maps.LatLng(37.62197524055062, 127.16017523675508), //인포윈도우 표시 위치입니다
//       iwRemoveable = true // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
//   }

//   const handleInfoWindowClose = () => {
//     setIsOpen(false)
//   }

//   useEffect(() => {
//     const container = document.getElementById("map") // 지도를 담을 영역의 DOM 레퍼런스
//     const options = {
//       center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974), // 지도의 중심좌표.
//       level: 3,
//     }
//     const map = new kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴

//     // 마커가 표시 될 위치
//     let markerPosition = new kakao.maps.LatLng(
//       37.62197524055062,
//       127.16017523675508
//     )

//     // 마커를 생성
//     let marker = new kakao.maps.Marker({
//       position: markerPosition,
//     })

//     // 마커를 지도 위에 표시
//     marker.setMap(map)

//     var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//       iwPosition = new kakao.maps.LatLng(37.62197524055062, 127.16017523675508), //인포윈도우 표시 위치입니다
//       iwRemoveable = true // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

//     // 인포윈도우를 생성하고 지도에 표시합니다
//     var infowindow = new kakao.maps.InfoWindow({
//       map: map, // 인포윈도우가 표시될 지도
//       position: iwPosition,
//       content: iwContent,
//       removable: iwRemoveable,
//     })

//     // 마커 클릭 시 인포윈도우 열기
//     kakao.maps.event.addListener(marker, "click", handleMarkerClick)
//   }, [])

//   return (
//     <div>
//       <div id="map" style={{ width: "500px", height: "500px" }}></div>
//       {isOpen && (
//         <div className="infoWindow">
//           <img
//             alt="close"
//             width="14"
//             height="13"
//             src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
//             style={{
//               position: "absolute",
//               right: "5px",
//               top: "5px",
//               cursor: "pointer",
//             }}
//             onClick={handleInfoWindowClose}
//           />
//           {/* <div style={{ padding: "5px", color: "#000" }}>Hello World!</div> */}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Map

import React, { useState, useEffect } from "react"

const { kakao } = window

function Map() {
  const [map, setMap] = useState(null)
  const [marker, setMarker] = useState(null)
  const [infoWindow, setInfoWindow] = useState(null)

  useEffect(() => {
    const container = document.getElementById("map") // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974), // 지도의 중심좌표.
      level: 3,
    }
    const map = new kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴
    setMap(map)

    // 마커가 표시될 위치
    const markerPosition = new kakao.maps.LatLng(
      37.62197524055062,
      127.16017523675508
    )

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    })
    setMarker(marker)

    // 마커를 지도 위에 표시
    marker.setMap(map)

    // 인포윈도우에 표출될 내용
    const iwContent = '<div style="padding:5px;">Hello World!</div>'

    // 인포윈도우를 생성
    const infoWindow = new kakao.maps.InfoWindow({
      content: iwContent,
    })
    setInfoWindow(infoWindow)

    // 마커 클릭 시 인포윈도우 열고 닫기
    kakao.maps.event.addListener(marker, "click", function () {
      if (infoWindow.getMap()) {
        infoWindow.close()
      } else {
        infoWindow.open(map, marker)
      }
    })
  }, [])

  return <div id="map" style={{ width: "500px", height: "500px" }}></div>
}

export default Map
