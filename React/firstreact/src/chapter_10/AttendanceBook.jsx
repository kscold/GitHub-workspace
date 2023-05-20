import React from "react";

const students = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
]; //value값만 있는 것은 오류를 야기하므로 id(key) 값도 만들어줌

function AttendanceBook() {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
} //`student-id-${student.id}` key를 포맷팅 된 문자열로 변경
// index를 key로 사용가능 대신 props에 추가시켜줘야됨

export default AttendanceBook;
