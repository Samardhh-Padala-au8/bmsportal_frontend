import './HomeFourth.css';
import * as SectionDiv from 'app/components/molecules';
import { useEffect, useRef, useState } from 'react';
import { VERTICAL_DATA } from 'utils/constants';

const VerticalCard: any = SectionDiv.VerticalCard;

export function HomeFourth() {
  const [opacity, setOpacity] = useState(1.0);
  const [movedX, setMovedx] = useState(0);
  const elRef = useRef();

  let initialMarginLeft = 0;

  useEffect(() => {
    initialMarginLeft =
      document.getElementById('cards').getBoundingClientRect().left - 20;
  }, []);

  const onWheel = e => {
    console.log(movedX,e.deltaY);
    if (
      e.deltaY === 0 ||
      document.getElementById('homeFourth').getBoundingClientRect().top > 0
    )
      return;
    if (e.deltaY > 0) {
      setOpacity(opacity => {
        return opacity > 0 ? opacity - 0.08 : opacity;
      });
      setMovedx(x => {
        return window.innerWidth -
          document.getElementById('cards').getBoundingClientRect().right <
          20
          ? x - 2
          : x;
      });
    } else {
      setOpacity(opacity => {
        return (opacity < 1 &&
          document.getElementById('cards').getBoundingClientRect().left) >
          initialMarginLeft
          ? opacity + 0.08
          : opacity;
      });
      setMovedx(x => {
        return x < 0 ? x + 2 : x;
      });
    }
  };

  useEffect(() => {
    setOpacity(1);
    const el = elRef.current;

    if (el) {
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <>
      <div className="homeFourth larged" ref={elRef} id="homeFourth">
        <div className="scroll-container">
          <div
            className="vertical_flex homefourth_data item"
            style={{ willChange: 'opacity', opacity: opacity }}
          >
            <p className="home_subtitle_fontstyle horizontal_flex">
              <div className="home_text_bar_pink"></div> Why Use Wejammin
            </p>
            <p className="home_title_fontstyle">
              Why musicians <br /> should be using <br /> WeJammin
            </p>
            <p className="home_text_fontstyle">
              Let’s see how y’all can benefit from WeJammin
            </p>
          </div>
          <div
            className="scroll-content larged"
            style={{
              willChange: 'transform',
              transform: `translate3d(${movedX}vh, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="cards" id="cards">
              {VERTICAL_DATA.map((data, index) => (
                <div className="item">
                  <VerticalCard
                    img={data.img}
                    title={data.title}
                    text={data.text}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
