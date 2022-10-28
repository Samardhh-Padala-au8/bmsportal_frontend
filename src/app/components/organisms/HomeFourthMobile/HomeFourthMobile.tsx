// import Carousel from 'react-bootstrap/Carousel';
import * as SectionDiv from 'app/components/molecules';
import { VERTICAL_DATA } from 'utils/constants';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1080 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1080, min: 720 },
    items: 2,
  },
  foldable: {
    breakpoint: { min: 464, max: 720 },
    items: 1,
    partialVisibilityGutter: 70,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
  },
};
const BodyDiv: any = SectionDiv.SectionDiv;
const VerticalCard: any = SectionDiv.VerticalCard;
export function HomeFourthMobile() {
  const CustomRightArrow = ({ onClick }) => {
    return (
      <div
        style={{
          position: `absolute`,
          width: `4.8rem`,
          height: `4.8rem`,
          background: `#D64568`,
          boxShadow: `4px 4px 20px rgba(0, 0, 0, 0.2)`,
          borderRadius: `100rem`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          cursor: 'pointer',
          right: `0%`,
          zIndex: '1000',
        }}
        onClick={() => onClick()}
      >
        <Image
          src={images.go}
          alt="logo"
          className="homefirst_arrowstyle"
          style={{ marginRight: '0.8rem' }}
        />
      </div>
    );
  };
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <div
        style={{
          position: `absolute`,
          width: `4.8rem`,
          height: `4.8rem`,
          background: `#D64568`,
          boxShadow: `4px 4px 20px rgba(0, 0, 0, 0.2)`,
          borderRadius: `100rem`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          cursor: 'pointer',
          left: `0%`,
          zIndex: '100',
        }}
        onClick={() => onClick()}
      >
        <Image
          src={images.go}
          alt="logo"
          className="homefirst_arrowstyle"
          style={{ marginRight: '0.8rem', transform: 'scaleX(-1)' }}
        />
      </div>
    );
  };
  const CustomDots = ({ onClick, ...rest }) => {
    const { active } = rest;
    return active === true ? (
      <div
        style={{
          width: '2.4rem',
          height: '0.8rem',
          background: '#E7E7E7',
          borderRadius: '5.6rem',
          marginRight: '0.8rem',
        }}
      ></div>
    ) : (
      <div
        style={{
          width: '0.8rem',
          height: '0.8rem',
          background: '#FFFFFF',
          opacity: '0.18',
          borderRadius: '5.6rem',
          marginRight: '0.8rem',
          cursor: 'pointer',
        }}
        onClick={() => onClick()}
      ></div>
    );
  };
  return (
    <div>
      <BodyDiv className="homeFourthMobile">
        <div className="carousel_flex">
          <p className="carousel_subtitle_fontstyle horizontal_flex">
            <div className="home_text_bar_pink"></div> Why Use Wejammin{' '}
            <div className="home_text_bar_left_pink"></div>
          </p>
          <p className="carousel_title_fontstyle">
            Why musicians should be using WeJammin
          </p>
          <p className="carousel_text_fontstyle">
            Let’s see how y’all can benefit from WeJammin
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <Carousel
            responsive={responsive}
            showDots={true}
            swipeable={true}
            draggable={true}
            removeArrowOnDeviceType={['tablet', 'mobile', 'foldable']}
            renderDotsOutside={true}
            partialVisible={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            customDot={<CustomDots />}
            renderButtonGroupOutside={true}
          >
            {VERTICAL_DATA.map((data, index) => (
              <VerticalCard
                img={data.img}
                title={data.title}
                text={data.text}
                index={index}
              />
            ))}
          </Carousel>
        </div>
        ;
      </BodyDiv>
    </div>
  );
}
