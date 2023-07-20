import styled from "@emotion/styled";
import React, { useState } from "react";

const MainButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  margin-top: 50px; /* Adjust the margin as needed */
`;

const MainButton = styled.button`
  width: 120px;
  height: 80px;
  border: 1px solid black;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  background-color: pink;
  cursor: pointer;
`;

const FloatingImage = styled.img`
  position: absolute;
  width: 100px;
  height: auto;
  margin-top: 30px;
  left: 300px;
`;

const buttonData = [
  {
    label: "196600",
    imagePath: "/책1.jpeg",
  },
  {
    label: "199600",
    imagePath: "/책 2.jpeg",
  },
  {
    label: "200601",
    imagePath: "",
  },
  {
    label: "200801",
    imagePath: "",
  },
];

export default function Home(): JSX.Element {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const OnClickButton = (imagePath: string): void => {
    setSelectedImages((prevImages) =>
      prevImages.includes(imagePath)
        ? prevImages.filter((img) => img !== imagePath)
        : [...prevImages, imagePath]
    );
  };

  return (
    <>
      <MainButtonContainer>
        {buttonData.map((button) => (
          <div key={button.label}>
            {selectedImages.includes(button.imagePath) && (
              <FloatingImage src={button.imagePath} alt="Book Cover" />
            )}
            <MainButton onClick={() => OnClickButton(button.imagePath)}>
              {button.label}
            </MainButton>
          </div>
        ))}
      </MainButtonContainer>
    </>
  );
}
