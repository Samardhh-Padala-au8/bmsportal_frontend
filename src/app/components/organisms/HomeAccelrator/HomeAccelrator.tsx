import { SectionDiv } from 'app/components/molecules';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import { media } from 'styles/media';
import styled from 'styled-components';

export function HomeAccelrator() {
  return (
    <SectionDiv className="homeaccelrator">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div className="vertical_flex">
          <p className="home_subtitle_fontstyle horizontal_flex">
            <div className="home_text_bar_pink"></div> Our Partners
          </p>
          <p className="home_title_fontstyle">Meet our Partners</p>
        </div>
        <ResDiv2>
          <Image
            src={images.ialogo}
            alt="logo"
            style={{ width: '30.4rem', height: '3.4rem' }}
          />
        </ResDiv2>
      </div>
    </SectionDiv>
  );
}

const ResDiv2 = styled.div`
  ${media.mobile`margin-top: 7rem`};
  ${media.medium`margin-top: 0rem`};
`;
