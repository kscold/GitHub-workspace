import React, { useRef } from 'react';
import './Slide.scss';

const colorDiv = [
  { color: 'red', key: 1 },
  { color: 'orange', key: 2 },
  { color: 'yellow', key: 3 },
  { color: 'green', key: 4 },
];

export const SlideX = (props) => {
  const slideRef = useRef(null);
  const slideArray = [...colorDiv];

  return (
    <div className="Background">
      <div className="DivContainer" ref={slideRef}>
        {slideArray.map((slide, index) => (
          <div
            key={index}
            className="DivBox"
            style={{ backgroundColor: slide.color }}
          >
            <p className="nameY">{slide.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
