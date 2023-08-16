// StudyCSS.tsx
import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";

export const PageContainer = styled.div`
  height: calc(100vh - 90px);
  overflow: hidden;
`;

export const StudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  flex-grow: 1;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
`;

export const FilterTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
  justify-content: center;
`;

export const TagButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#5eb6f6" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const GroupButton = styled.button`
  background-color: #5eb6f6;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const expandAnimation = keyframes` // 추가
  0% {
    height: 100px;
  }
  100% {
    height: auto;
  }
`;

const collapseAnimation = keyframes` // 추가
  0% {
    height: auto;
  }
  100% {
    height: 100px;
  }
`;

export const StudyComponent = styled.div<{ active: boolean }>`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  position: relative; /* 추가 */
  cursor: pointer; /* 추가 */
  /* transition: height 1s ease-in-out;  */
  height: ${({ active }) => (active ? "auto" : "100px")}; /* 초기 크기 설정 */

  /* ${({ active }) =>
    active
      ? css`
          animation: ${expandAnimation} 1s 1 ease-in-out forwards;
        `
      : css`
          animation: ${collapseAnimation} 1s 1 ease-in-out forwards;
        `} */
`;

export const StudySerach = styled.input`
  width: 50%;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 2%;
  border-color: #5eb6f6;
`;
