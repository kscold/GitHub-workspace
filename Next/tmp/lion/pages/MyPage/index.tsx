// // pages/MyPage/index.tsx
// import React, { useEffect, useState } from "react";
// import {
//   RowContainer,
//   SquareComponent,
//   SquareComponentContainer,
//   EnlargedContent,
// } from "./MyPageCss";
// import MyPageLayout from "./MyPageLayout";
// import WhenToMeet from "../../src/components/units/mypage/WhenToMeet";
// import Challenge from "../../src/components/units/mypage/Challenge";
// import TodayStudyLog from "../../src/components/units/mypage/TodayStudyLog";
// import AllStudyLog from "../../src/components/units/mypage/AllStudyLog";

// const user = {
//   id: 1,
//   username: "exampleUser",
//   loginTime: new Date("2023-08-09T09:00:00"), // Replace with actual login time
// };

// const calculateActivityTime = () => {
//   const currentTime = new Date();
//   const timeDifference = currentTime - user.loginTime;
//   const minutes = Math.floor(timeDifference / 60000); // Convert to minutes
//   return minutes;
// };

// const MyPage = (): JSX.Element => {
//   const [selectedComponent, setSelectedComponent] = useState("");
//   const [enterTime, setEnterTime] = useState(null); // 사용자가 방에 입장한 시간

//   const [activityTime, setActivityTime] = useState(0); // 오늘 공부 활동 시간

//   useEffect(() => {
//     // 사용자가 질문방 페이지로 접속한 경우, localStorage에 저장된 입장 시간을 가져옴
//     const fetchEnterTime = () => {
//       const storedEnterTime = localStorage.getItem("enterTime");
//       if (storedEnterTime) {
//         setEnterTime(new Date(storedEnterTime));
//       }
//     };

//     fetchEnterTime();
//   }, []);

//   useEffect(() => {
//     // 오늘의 공부 활동 시간 계산 및 업데이트
//     const calculateAndSetActivityTime = () => {
//       if (enterTime) {
//         const currentTime = new Date();
//         const timeDifference = currentTime - enterTime;
//         const minutes = Math.floor(timeDifference / 60000); // 분 단위로 계산
//         setActivityTime(minutes);
//       }
//     };

//     calculateAndSetActivityTime();
//   }, [enterTime]);

//   return (
//     <MyPageLayout>
//       <SquareComponentContainer>
//         <RowContainer>
//           <SquareComponent
//             onClick={() => {
//               selectedComponent === "StudyLog"
//                 ? setSelectedComponent("") // 선택한 컴포넌트 클릭시 true면 빈 문자열로 만들어 확장된 창을 닫고
//                 : setSelectedComponent("StudyLog"); // false이면 선택한 컴포넌트로 만들어 창을 확장
//             }}
//             active={selectedComponent === "StudyLog"} // SquareComponent에 active props를 넘김(확장 관련)
//           >
//             {selectedComponent === "StudyLog" ? (
//               <EnlargedContent>
//                 <h3>오늘 공부 시간</h3>
//                 <p>활동 시간: {calculateActivityTime()} 분</p>
//               </EnlargedContent>
//             ) : (
//               <TodayStudyLog />
//             )}
//           </SquareComponent>
//           <SquareComponent
//             onClick={() => {
//               selectedComponent === "AllStudyLog"
//                 ? setSelectedComponent("")
//                 : setSelectedComponent("AllStudyLog");
//             }}
//             active={selectedComponent === "AllStudyLog"}
//           >
//             {selectedComponent === "AllStudyLog" ? (
//               <EnlargedContent>
//                 <h3>전체 공부 시간</h3>
//                 <p>활동 시간: {calculateActivityTime()} 분</p>
//               </EnlargedContent>
//             ) : (
//               <AllStudyLog />
//             )}
//           </SquareComponent>
//         </RowContainer>
//         <RowContainer>
//           <SquareComponent
//             onClick={() => {
//               selectedComponent === "WhenToMeet"
//                 ? setSelectedComponent("")
//                 : setSelectedComponent("WhenToMeet");
//             }}
//             active={selectedComponent === "WhenToMeet"}
//           >
//             {selectedComponent === "WhenToMeet" ? (
//               <EnlargedContent>
//                 <h1>Hello</h1>
//               </EnlargedContent>
//             ) : (
//               <WhenToMeet />
//             )}
//           </SquareComponent>
//           <SquareComponent
//             onClick={() => {
//               selectedComponent === "challenge"
//                 ? setSelectedComponent("")
//                 : setSelectedComponent("challenge");
//             }}
//             active={selectedComponent === "challenge"}
//           >
//             {selectedComponent === "challenge" ? (
//               <EnlargedContent>
//                 <h3>도전과제</h3>
//               </EnlargedContent>
//             ) : (
//               <Challenge />
//             )}
//           </SquareComponent>
//         </RowContainer>
//       </SquareComponentContainer>
//     </MyPageLayout>
//   );
// };

// export default MyPage;

// import React, { useEffect, useState } from "react";
// import {
//   RowContainer,
//   SquareComponent,
//   SquareComponentContainer,
//   EnlargedContent,
// } from "./MyPageCss";
// import MyPageLayout from "./MyPageLayout";
// import WhenToMeet from "../../src/components/units/mypage/WhenToMeet";
// import Challenge from "../../src/components/units/mypage/Challenge";
// import TodayStudyLog from "../../src/components/units/mypage/TodayStudyLog";
// import AllStudyLog from "../../src/components/units/mypage/AllStudyLog";

// const user = {
//   id: 1,
//   username: "exampleUser",
//   loginTime: new Date("2023-08-09T09:00:00"), // 실제 로그인 시간으로 대체
// };

// const MyPage = (): JSX.Element => {
//   const [selectedComponent, setSelectedComponent] = useState("");
//   const [enterTime, setEnterTime] = useState(null); // 사용자의 입장 시간

//   const [activityTime, setActivityTime] = useState(0); // 오늘의 공부 활동 시간 (초 단위)

//   useEffect(() => {
//     // 사용자가 질문방 페이지로 접속한 경우, localStorage에 저장된 입장 시간을 가져옴
//     const fetchEnterTime = () => {
//       const storedEnterTime = localStorage.getItem("enterTime");
//       if (storedEnterTime) {
//         setEnterTime(new Date(storedEnterTime));
//       }
//     };

//     fetchEnterTime();
//   }, []);

//   useEffect(() => {
//     // 오늘의 공부 활동 시간 계산 및 업데이트
//     const calculateAndSetActivityTime = () => {
//       if (enterTime) {
//         const currentTime = new Date();
//         let timeDifference = currentTime - enterTime;
//         if (timeDifference >= 86400000) {
//           timeDifference = 86400000; // 하루를 초과한 경우 최대 24시간으로 제한
//         }
//         setActivityTime(Math.floor(timeDifference / 1000)); // 초 단위로 변환하여 업데이트
//       }
//     };

//     calculateAndSetActivityTime();
//   }, [enterTime]);

//   // 로그아웃 시 오늘의 공부 활동 시간을 초기화
//   const handleLogout = () => {
//     localStorage.removeItem("enterTime");
//     setEnterTime(null);
//     setActivityTime(0);
//   };

//   useEffect(() => {
//     // My Page를 벗어난 후에도 활동 시간을 유지하기 위해 활동 시간과 입장 시간을 localStorage에 저장
//     if (enterTime) {
//       localStorage.setItem("activityTime", activityTime.toString());
//       localStorage.setItem("enterTime", enterTime.toISOString());
//     }
//   }, [activityTime, enterTime]);

//   // My Page로 돌아올 때 localStorage에서 활동 시간과 입장 시간을 가져와 업데이트
//   useEffect(() => {
//     const storedActivityTime = localStorage.getItem("activityTime");
//     const storedEnterTime = localStorage.getItem("enterTime");
//     if (storedActivityTime && storedEnterTime) {
//       setActivityTime(Number(storedActivityTime));
//       setEnterTime(new Date(storedEnterTime));
//     }
//   }, []);

//   return (
//     <MyPageLayout>
//       <SquareComponentContainer>
//         <RowContainer>
//           <SquareComponent
//             onClick={() => {
//               selectedComponent === "StudyLog"
//                 ? setSelectedComponent("")
//                 : setSelectedComponent("StudyLog");
//             }}
//             active={selectedComponent === "StudyLog"}
//           >
//             {selectedComponent === "StudyLog" ? (
//               <EnlargedContent>
//                 <h3>오늘의 활동 시간</h3>
//                 <p>
//                   활동 시간: {Math.floor(activityTime / 3600)}시간{" "}
//                   {Math.floor((activityTime % 3600) / 60)}분 {activityTime % 60}
//                   초
//                 </p>
//               </EnlargedContent>
//             ) : (
//               <TodayStudyLog />
//             )}
//           </SquareComponent>
//           {/* 나머지 SquareComponent 코드도 동일한 패턴으로 작성 */}
//         </RowContainer>
//       </SquareComponentContainer>
//     </MyPageLayout>
//   );
// };

// export default MyPage;

// 두번째 시간 업데이트
// import React, { useEffect, useState } from "react";
// import {
//   RowContainer,
//   SquareComponent,
//   SquareComponentContainer,
//   EnlargedContent,
// } from "./MyPageCss";
// import MyPageLayout from "./MyPageLayout";
// import WhenToMeet from "../../src/components/units/mypage/WhenToMeet";
// import Challenge from "../../src/components/units/mypage/Challenge";
// import TodayStudyLog from "../../src/components/units/mypage/TodayStudyLog";
// import AllStudyLog from "../../src/components/units/mypage/AllStudyLog";

// const user = {
//   id: 1,
//   username: "exampleUser",
//   loginTime: new Date("2023-08-09T09:00:00"), // 실제 로그인 시간으로 대체
// };

// const MyPage = (): JSX.Element => {
//   const [selectedComponent, setSelectedComponent] = useState("");
//   const [enterTime, setEnterTime] = useState(null); // 사용자의 입장 시간

//   const [activityTime, setActivityTime] = useState(0); // 오늘의 공부 활동 시간 (초 단위)
//   const [lastLogoutTime, setLastLogoutTime] = useState(null); // 마지막 로그아웃 시간

//   useEffect(() => {
//     // 사용자가 질문방 페이지로 접속한 경우, localStorage에 저장된 입장 시간을 가져옴
//     const fetchEnterTime = () => {
//       const storedEnterTime = localStorage.getItem("enterTime");
//       if (storedEnterTime) {
//         setEnterTime(new Date(storedEnterTime));
//       }
//     };

//     fetchEnterTime();
//   }, []);

//   useEffect(() => {
//     // 오늘의 공부 활동 시간 계산 및 업데이트
//     const calculateAndSetActivityTime = () => {
//       if (enterTime) {
//         const currentTime = new Date();
//         let timeDifference = currentTime - enterTime;
//         if (timeDifference >= 86400000) {
//           timeDifference = 86400000; // 하루를 초과한 경우 최대 24시간으로 제한
//         }
//         setActivityTime(Math.floor(timeDifference / 1000)); // 초 단위로 변환하여 업데이트
//         // 로그 추가
//         console.log(
//           `[${currentTime.toLocaleString()}] 활동 시간: ${Math.floor(
//             timeDifference / 1000
//           )}초`
//         );
//       }
//     };

//     calculateAndSetActivityTime();
//   }, [enterTime]);

//   useEffect(() => {
//     // My Page를 벗어난 후에도 활동 시간을 유지하기 위해 활동 시간과 입장 시간을 localStorage에 저장
//     if (enterTime) {
//       localStorage.setItem("activityTime", activityTime.toString());
//       localStorage.setItem("enterTime", enterTime.toISOString());
//     }
//   }, [activityTime, enterTime]);

//   const calculateAndSetLastLogoutTime = () => {
//     const currentTime = new Date();
//     const koreaTimeOffset = 9 * 60; // 한국 시간과 UTC의 차이 (9시간)
//     const koreaTime = currentTime.getUTCHours() + koreaTimeOffset;
//     const nextDayResetHour = 24; // 다음 날 초기화 시간 (24시, 한국 시간 기준)

//     if (koreaTime >= nextDayResetHour) {
//       currentTime.setUTCDate(currentTime.getUTCDate() + 1); // 다음 날로 설정
//       currentTime.setUTCHours(nextDayResetHour, 0, 0, 0); // 초기화 시간 설정
//     } else {
//       currentTime.setUTCHours(nextDayResetHour, 0, 0, 0); // 초기화 시간 설정
//     }

//     setLastLogoutTime(currentTime.toISOString());
//   };

//   const handleLogout = () => {
//     calculateAndSetLastLogoutTime();
//     localStorage.removeItem("enterTime");
//     setEnterTime(null);
//     setActivityTime(0);
//   };

//   // 초기화 시간에 활동 시간과 마지막 로그아웃 시간 초기화
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentTime = new Date();
//       if (lastLogoutTime) {
//         const resetTime = new Date(lastLogoutTime);
//         if (currentTime >= resetTime) {
//           setLastLogoutTime(null);
//           setActivityTime(0);
//         }
//       }
//     }, 60000); // 매 분마다 체크

//     return () => clearInterval(interval);
//   }, [lastLogoutTime]);

//   // My Page로 돌아올 때 localStorage에서 활동 시간과 입장 시간을 가져와 업데이트
//   useEffect(() => {
//     const storedActivityTime = localStorage.getItem("activityTime");
//     const storedEnterTime = localStorage.getItem("enterTime");
//     if (storedActivityTime && storedEnterTime) {
//       setActivityTime(Number(storedActivityTime));
//       setEnterTime(new Date(storedEnterTime));
//     }
//   }, []);

//   return (
//     <MyPageLayout>
//       <SquareComponentContainer>
//         <RowContainer>
//           <SquareComponent
//             onClick={() => {
//               selectedComponent === "StudyLog"
//                 ? setSelectedComponent("")
//                 : setSelectedComponent("StudyLog");
//             }}
//             active={selectedComponent === "StudyLog"}
//           >
//             {selectedComponent === "StudyLog" ? (
//               <EnlargedContent>
//                 <h3>오늘의 활동 시간</h3>
//                 <p>
//                   활동 시간: {Math.floor(activityTime / 3600)}시간{" "}
//                   {Math.floor((activityTime % 3600) / 60)}분 {activityTime % 60}
//                   초
//                 </p>
//               </EnlargedContent>
//             ) : (
//               <TodayStudyLog />
//             )}
//           </SquareComponent>
//           {/* 나머지 SquareComponent 코드도 동일한 패턴으로 작성 */}
//         </RowContainer>
//       </SquareComponentContainer>
//     </MyPageLayout>
//   );
// };

// export default MyPage;

import React, { useEffect, useState } from "react";
import {
  RowContainer,
  SquareComponent,
  SquareComponentContainer,
  EnlargedContent,
} from "./MyPageCss";
import MyPageLayout from "./MyPageLayout";
import TodayStudyLog from "../../src/components/units/mypage/TodayStudyLog";

const MyPage = (): JSX.Element => {
  const [selectedComponent, setSelectedComponent] = useState("");
  const [enterTime, setEnterTime] = useState(null); // 사용자 진입 시간
  const [activityTime, setActivityTime] = useState(0); // 오늘의 공부 활동 시간 (초 단위)

  useEffect(() => {
    // 사용자가 질문방 페이지에 접근할 때, localStorage에 저장된 진입 시간을 가져옵니다.
    const fetchEnterTime = () => {
      const storedEnterTime = localStorage.getItem("enterTime");
      if (storedEnterTime) {
        setEnterTime(new Date(storedEnterTime));
      }
    };

    fetchEnterTime();
  }, []);

  useEffect(() => {
    // 오늘의 공부 활동 시간을 계산하여 업데이트합니다.
    const calculateAndSetActivityTime = () => {
      if (enterTime) {
        const currentTime = new Date();

        // 서버 시간 API를 통해 서버 시간 가져오기
        fetch("https://worldtimeapi.org/api/timezone/Asia/Seoul")
          .then((response) => response.json())
          .then((serverTimeData) => {
            const serverTime = new Date(serverTimeData.datetime);
            const timeDifference = currentTime - enterTime;
            const activitySeconds = Math.min(
              timeDifference / 1000,
              (serverTime - enterTime) / 1000
            ); // 최대 공부 활동 시간은 서버 시간까지의 시간 차이

            setActivityTime(Math.floor(activitySeconds));
            console.log(
              `[${currentTime.toLocaleString()}] activity time: ${Math.floor(
                activitySeconds
              )} seconds`
            );
          });
      }
    };

    calculateAndSetActivityTime();
  }, [enterTime]);

  useEffect(() => {
    // 활동 시간과 진입 시간을 localStorage에 저장하여 My Page를 나갔다가 돌아와도 활동 시간을 유지합니다.
    if (enterTime) {
      localStorage.setItem("activityTime", activityTime.toString());
      localStorage.setItem("enterTime", enterTime.toISOString());
    }
  }, [activityTime, enterTime]);

  return (
    <MyPageLayout>
      <SquareComponentContainer>
        <RowContainer>
          <SquareComponent
            onClick={() => {
              selectedComponent === "StudyLog"
                ? setSelectedComponent("")
                : setSelectedComponent("StudyLog");
            }}
            active={selectedComponent === "StudyLog"}
          >
            {selectedComponent === "StudyLog" ? (
              <EnlargedContent>
                <h3>오늘의 활동 시간</h3>
                <p>
                  활동 시간: {Math.floor(activityTime / 3600)}시간{" "}
                  {Math.floor((activityTime % 3600) / 60)}분 {activityTime % 60}
                  초
                </p>
              </EnlargedContent>
            ) : (
              <TodayStudyLog />
            )}
          </SquareComponent>
          {/* 나머지 SquareComponent 코드는 동일한 패턴을 따릅니다 */}
        </RowContainer>
      </SquareComponentContainer>
    </MyPageLayout>
  );
};

export default MyPage;
