import './HomeSeventh.css';
import * as SectionDiv from 'app/components/molecules';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
const BodyDiv: any = SectionDiv.SectionDiv;

export function HomeSeventh() {
  const onSocial = route => {
    window.open(route);
  };

  return (
    <BodyDiv className="homeSeventh">
      <div className="vertical_flex_center">
        <p className="home_subtitle_fontstyle horizontal_flex">
          <div className="home_text_bar"></div> COMMUNITY{' '}
          <div className="home_text_bar_left"></div>
        </p>
        <p className="home_title_fontstyle">Join the community</p>
        <p className="home_text_fontstyle home_text_center">
          We are building a community of Singers, songwriters, producers and
          instrumentalists. Where everyone can build their network and learn
          from each other.
        </p>
        <div
          className="horizontal_flex_justify home_social_top"
          style={{ width: '100%' }}
        >
          <div className="vertical_flex_center ">
            <Image
              onClick={() => {
                onSocial('https://t.me/wejamminApp');
              }}
              src={images.telegram}
              alt="logo"
              className=" home_social_icons"
            />
            <p className="home_text_fontstyle home_margin_null">TELEGRAM</p>
          </div>
          <div className="vertical_flex_center all_margin_left">
            <Image
              onClick={() => {
                onSocial(
                  'https://instagram.com/wejammin.app?igshid=YmMyMTA2M2Y=',
                );
              }}
              src={images.instagramlogo}
              alt="logo"
              className="home_social_icons"
            />
            <p className="home_text_fontstyle home_margin_null">INSTAGRAM</p>
          </div>
        </div>
      </div>
    </BodyDiv>
  );
}
