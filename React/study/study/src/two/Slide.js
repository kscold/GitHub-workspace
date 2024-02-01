import React, { useRef } from 'react';
import './Slide.scss';

const colorDiv = [
  { color: 'red', key: 1 },
  { color: 'orange', key: 2 },
  { color: 'yellow', key: 3 },
  { color: 'green', key: 4 },
];

const Slide = (props) => {
  const slideRef = useRef(null);
  const slideArray = [...colorDiv];

  return (
    <div className={props.x ? 'BackgroundX' : 'BackgroundY'}>
      <div className="DivContainer" ref={slideRef}>
        {slideArray.map((slide, index) => (
          <div
            key={index}
            className="DivBox"
            style={{ backgroundColor: slide.color }}
          >
            <div>
              <p className="name">{props.x ? 'X Slide' : 'Y Slide'}</p>
              <p className="name">{slide.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
