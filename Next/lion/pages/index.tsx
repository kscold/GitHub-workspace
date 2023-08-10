import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

const images = ["/main1.png", "/main2.png", "/main3.png"];

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
`;

const Slide = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 550px;
`;

const SlideText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  color: white;
  text-align: center;
  font-family: "Cafe24Ohsquare-v2.0", sans-serif;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SectionContainer = styled.div`
  padding: 40px;
  background-color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;//행을 벗어날시 줄바꿈
  
`;

const ListItem = styled.div`
width: calc(33.33% - 60px);
margin-right: 20px;
margin-bottom: 20px;
padding: 20px;
background-color: #fff;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease;
cursor:pointer;
&:hover {
  background-color: #f5f5f5;
}
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  color: #777;
`;
const NoticeLayout = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`
const NoticeButton = styled.button`
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 18px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

const MainBigContent = styled.div`

margin: 0px 0px 16px;
font-size: 46px;
font-weight: bold;
line-height: 1.4;
color: rgb(51, 61, 75);
margin-top:70px;
`
const MainSmallContent = styled.div`
margin: 0px 0px 70px;
font-size: 18px;
line-height: 29px;
color: rgb(107, 118, 132);
white-space: pre-line;

`
interface MainIntroLayoutProps {
  showHiddenContent: boolean;
  imageUrl:string;
}
const MainIntroLayout = styled.div<MainIntroLayoutProps>`
  
margin-left: 40px;
  position: relative;
  width: 40%;
  height: 250px;
  padding: 32px;
  overflow: hidden;
  border-radius: 12px;
  background-image: ${({ imageUrl }) =>
  `url(${imageUrl})`}; 
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  
  // before는 선택한 element앞에 가상 콘텐츠 삽입
  &::before {
    content: "";
    position: absolute;
    //top,left,right,bottom:0은 부모요소와 일치시키기 위함.
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${({ imageUrl }) =>
    `url(${imageUrl})`}; 
    background-size: cover;
    background-position: center;
    filter: ${({ showHiddenContent }) => (showHiddenContent ? 'none' : 'blur(8px)')};
    transition: filter 0.3s ease;
    z-index: -1; 
  }

  &:hover {
    transform: scale(1.05);
  }

  margin-bottom: 30px;
`;



const MainIntroContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  
`;

const MainIntroTitle = styled.h1`
  font-size: 36px;
  color: white;
  filter:none;
`;

const MainIntroDescription = styled.p`
  font-size: 18px;
  color: white;
`;
const HiddenIntroLayout = styled.div`
  padding:30px;
  background-color:transparent;
  filter:none;
`
const MainIntroRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;


const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Slide key={index}>
            <Image src={image} alt={`Slide ${index}`} />
            <SlideText>공부 그 이상의 모든 것</SlideText>
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default function Home(): JSX.Element {
  const router = useRouter(); // useRouter 훅을 밖에서 가져옵니다.

  const onClickNoticeItem = (path: string): void => {
    // 지정된 경로로 이동
    void router.push(path);
  };

  const [showHiddenContent, setShowHiddenContent] = useState(true);
  const [showHiddenContent2, setShowHiddenContent2] = useState(true);
  const [showHiddenContent3, setShowHiddenContent3] = useState(true);
  const [showHiddenContent4, setShowHiddenContent4] = useState(true);
  const toggleHiddenContent = () => {
    setShowHiddenContent(!showHiddenContent);
  };
  const toggleHiddenContent2 = () => {
    setShowHiddenContent2(!showHiddenContent2);
  };
  const toggleHiddenContent3 = () => {
    setShowHiddenContent3(!showHiddenContent3);
  };
  const toggleHiddenContent4 = () => {
    setShowHiddenContent4(!showHiddenContent4);
  };
  return (
    <>
      <SliderComponent />

      <MainBigContent>모두를 위한, 새로운 방안</MainBigContent>
      <MainSmallContent>어렵고 멀게만 느껴진 모든것들,<br></br>
        누구나 쉽게 접하고, 다양한 방안들을 확인 가능하게 하는것이 Solver커뮤니티의 존재 이유입니다.</MainSmallContent>
      <MainIntroRow>
        <MainIntroLayout imageUrl="main1.png" showHiddenContent={showHiddenContent} onMouseEnter={toggleHiddenContent} onMouseLeave={toggleHiddenContent}>
          {showHiddenContent ? <MainIntroContent>
            <MainIntroTitle>Solver가 바꿀 커뮤니티</MainIntroTitle>
            <MainIntroDescription>
              편리한 커뮤니티 서비스를 경험하세요.
            </MainIntroDescription>
          </MainIntroContent> :
            <HiddenIntroLayout>
              <MainIntroContent>
                <MainIntroTitle>Solver가 바꿀 커뮤니티</MainIntroTitle>
                <MainIntroDescription>
                  Solver는 종합 커뮤니티 사이트 입니다. 다양한 방안들을 확인해보고 업적을 이루어보세요!
                </MainIntroDescription>
              </MainIntroContent>
            </HiddenIntroLayout>
          }
        </MainIntroLayout>

        <MainIntroLayout imageUrl="main2.png" showHiddenContent={showHiddenContent2} onMouseEnter={toggleHiddenContent2} onMouseLeave={toggleHiddenContent2}>
          {showHiddenContent2 ? <MainIntroContent>
            <MainIntroTitle>커뮤니티하면 첫번째로,<br/> 생각나는 서비스 Solver</MainIntroTitle>
            <MainIntroDescription>
              편리한 커뮤니티 서비스를 경험하세요.
            </MainIntroDescription>
          </MainIntroContent> :
            <HiddenIntroLayout>
              <MainIntroContent>
                <MainIntroTitle>커뮤니티하면 첫번째로,<br/> 생각나는 서비스 Solver</MainIntroTitle>
                <MainIntroDescription>
                  편리한 커뮤니티 서비스를 경험하세요.
                </MainIntroDescription>
              </MainIntroContent>
            </HiddenIntroLayout>
          }
        </MainIntroLayout>
      </MainIntroRow>

      <MainIntroRow>
        <MainIntroLayout imageUrl="main3.png" showHiddenContent={showHiddenContent3} onMouseEnter={toggleHiddenContent3} onMouseLeave={toggleHiddenContent3}>
          {showHiddenContent3 ? <MainIntroContent>
            <MainIntroTitle>Solver가 바꿀 커뮤니티</MainIntroTitle>
            <MainIntroDescription>
              편리한 커뮤니티 서비스를 경험하세요.
            </MainIntroDescription>
          </MainIntroContent> :
            <HiddenIntroLayout>
              <MainIntroContent>
                <MainIntroTitle>Solver가 바꿀 커뮤니티</MainIntroTitle>
                <MainIntroDescription>
                  편리한 커뮤니티 서비스를 경험하세요.
                </MainIntroDescription>
              </MainIntroContent>
            </HiddenIntroLayout>
          }
        </MainIntroLayout>

        <MainIntroLayout imageUrl="main1.png" showHiddenContent={showHiddenContent4} onMouseEnter={toggleHiddenContent4} onMouseLeave={toggleHiddenContent4}>
          {showHiddenContent4 ? <MainIntroContent>
            <MainIntroTitle>커뮤니티하면 첫번째로,<br/> 생각나는 서비스 Solver</MainIntroTitle>
            <MainIntroDescription>
              편리한 커뮤니티 서비스를 경험하세요.
            </MainIntroDescription>
          </MainIntroContent> :
            <HiddenIntroLayout>
              <MainIntroContent>
                <MainIntroTitle>커뮤니티하면 첫번째로,<br/> 생각나는 서비스 Solver</MainIntroTitle>
                <MainIntroDescription>
                  편리한 커뮤니티 서비스를 경험하세요.
                </MainIntroDescription>
              </MainIntroContent>
            </HiddenIntroLayout>
          }
        </MainIntroLayout>
      </MainIntroRow>

      <SectionContainer>
        <NoticeLayout>
          <SectionTitle>공지사항</SectionTitle>
          <NoticeButton onClick={() => onClickNoticeItem("/Notice")}>+</NoticeButton>
        </NoticeLayout>


        <ListContainer>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle >공지사항 1</ItemTitle>
            <ItemDescription>이벤트 안내 및 공지사항 내용입니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle >공지사항 2</ItemTitle>
            <ItemDescription>주요 업데이트 및 변경 사항을 안내합니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>공지사항 3</ItemTitle>
            <ItemDescription>서비스 이용 안내 및 업데이트 예정 사항입니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>공지사항 1</ItemTitle>
            <ItemDescription>이벤트 안내 및 공지사항 내용입니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>공지사항 2</ItemTitle>
            <ItemDescription>주요 업데이트 및 변경 사항을 안내합니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>공지사항 3</ItemTitle>
            <ItemDescription>서비스 이용 안내 및 업데이트 예정 사항입니다.</ItemDescription>
          </ListItem>


        </ListContainer>
      </SectionContainer>

      <SectionContainer>
        <NoticeLayout>
          <SectionTitle>자료실</SectionTitle>
          <NoticeButton onClick={() => onClickNoticeItem("/Resource")}>+</NoticeButton>
        </NoticeLayout>
        <ListContainer>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 1</ItemTitle>
            <ItemDescription>유용한 자료 및 파일을 제공합니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 2</ItemTitle>
            <ItemDescription>학습 자료와 참고 문서를 다운로드하세요.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 3</ItemTitle>
            <ItemDescription>관련된 자료들을 손쉽게 찾아보세요.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 1</ItemTitle>
            <ItemDescription>유용한 자료 및 파일을 제공합니다.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 2</ItemTitle>
            <ItemDescription>학습 자료와 참고 문서를 다운로드하세요.</ItemDescription>
          </ListItem>
          <ListItem onClick={() => onClickNoticeItem("/Notice")}>
            <ItemTitle>자료 3</ItemTitle>
            <ItemDescription>관련된 자료들을 손쉽게 찾아보세요.</ItemDescription>
          </ListItem>
        </ListContainer>
      </SectionContainer>
    </>
  );
}