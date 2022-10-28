import styled from 'styled-components';
import { media } from 'styles/media';
import Image from 'react-bootstrap/Image';
import facebok from 'app/assets/facefooter.svg';
import telegram from 'app/assets/telefooter.svg';

import insta from 'app/assets/insta.svg';
import { useHistory } from 'react-router-dom';

import googleplay from 'app/assets/googleplay.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from 'utils/constants/images';
//import { themeColors } from 'styles/theme';
import { WavyLink } from 'react-wavy-transitions';

export function Footer() {
  const onSocial = route => {
    window.open(route);
  };
  const history = useHistory();
  const onredirect = route => {
    history.push(route);
  };
  return (
    <Div>
      <SectionDiv>
        <div style={{ marginBottom: '3rem' }}>
          {' '}
          <Image
            src={images.wejamminlogo}
            style={{
              cursor: 'pointer',
            }}
          />
        </div>
        <div>
          <Row>
            <Col xs={0} sm={0} md={6} lg={6}>
              <div>
                <div
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    onSocial(
                      'https://play.google.com/store/apps/details?id=com.wedigit.wejammin&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
                    );
                  }}
                >
                  <Image
                    src={googleplay}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <div style={{ marginTop: '2.4rem' }}>
                  <Text>
                    Join the greatest community of musicians and start earning!
                  </Text>
                </div>
                <HorizontalDiv
                  style={{ marginTop: '4rem', cursor: 'pointer' }}
                  onClick={() => {
                    onSocial('https://www.facebook.com/get.wejammin/');
                  }}
                >
                  <Image
                    src={facebok}
                    style={{
                      marginRight: '0.6rem',
                    }}
                  />
                  <Text>FACEBOOK</Text>
                </HorizontalDiv>
                <HorizontalDiv
                  style={{ marginTop: '1.6rem', cursor: 'pointer' }}
                  onClick={() => {
                    onSocial(
                      'https://instagram.com/wejammin.app?igshid=YmMyMTA2M2Y=',
                    );
                  }}
                >
                  <Image
                    src={insta}
                    style={{
                      marginRight: '0.6rem',
                    }}
                  />
                  <Text>INSTAGRAM</Text>
                </HorizontalDiv>
                <HorizontalDiv
                  style={{ marginTop: '1.6rem', cursor: 'pointer' }}
                  onClick={() => {
                    onSocial('https://t.me/wejamminApp');
                  }}
                >
                  <Image
                    src={telegram}
                    style={{
                      marginRight: '0.6rem',
                    }}
                  />
                  <Text>TELEGRAM</Text>
                </HorizontalDiv>
              </div>
            </Col>
            <Col xs={0} sm={0} md={3} lg={3}>
              <div>
                <ResponsiveDiv>
                  <Title>Explore</Title>
                </ResponsiveDiv>
                <ResponsiveDiv2>
                  <WavyLink
                    style={{ marginTop: '2.4rem', cursor: 'pointer' }}
                    waveColor="#d64568"
                    to="/producers"
                  >
                    <Text>For Producers</Text>
                  </WavyLink>
                </ResponsiveDiv2>

                {/* <ResponsiveDiv2
                  style={{ cursor: 'pointer' }}
                  onClick={() => onredirect('/submitdetail')}
                >
                  <Text>Submit Music</Text>
                </ResponsiveDiv2> */}
                <ResponsiveDiv2
                  style={{ cursor: 'pointer' }}
                  onClick={() => onredirect('/faqs#0')}
                >
                  <WavyLink waveColor="rgb(91, 42, 134)" to="/faqs#0">
                    <Text>FAQs</Text>
                  </WavyLink>
                </ResponsiveDiv2>
              </div>
            </Col>
            <Col xs={0} sm={0} md={3} lg={3}>
              <div>
                <ResponsiveDiv>
                  <Title>Legal & Contact</Title>
                </ResponsiveDiv>
                <div
                  style={{ cursor: 'pointer', marginTop: '2.4rem' }}
                  onClick={() => onredirect('/faqs#1')}
                >
                  <Text>Terms and conditions</Text>
                </div>
                <ResponsiveDiv2
                  style={{ cursor: 'pointer' }}
                  onClick={() => onredirect('/faqs#2')}
                >
                  <Text>Copyright</Text>
                </ResponsiveDiv2>
                <ResponsiveDiv2
                  style={{ cursor: 'pointer' }}
                  onClick={() => onredirect('/faqs#3')}
                >
                  <Text>Privacy</Text>
                </ResponsiveDiv2>
                <div style={{ marginTop: '2.4rem' }}>
                  <LinkText>
                    <Text2
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        onredirect('/copyright');
                      }}
                    >
                      hello@wedigit.tech
                    </Text2>
                  </LinkText>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </SectionDiv>
      <div
        style={{
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          paddingBottom: '1.6rem',
        }}
      >
        <LinkText>
          <Text>Powered by</Text>{' '}
          <Text2
            style={{ cursor: 'pointer' }}
            onClick={() => {
              onSocial('https://www.wedigit.tech/');
            }}
          >
            www.wedigit.tech
          </Text2>
        </LinkText>
      </div>
    </Div>
  );
}
const Div = styled.div`
  background: #0d0d0d;
`;
const ResponsiveDiv = styled.div`
  ${media.mobile`margin-top: 4rem`};
  ${media.small`margin-top: 0rem`};
`;
const ResponsiveDiv2 = styled.div`
  ${media.mobile`margin-top: 1.6rem`};
  ${media.small`margin-top: 2.4rem`};
`;
const SectionDiv: any = styled.div`
  ${media.mobile`padding: 5.6rem 3.2rem`};
  ${media.small`padding: 12rem`};
  ${media.medium`padding: 12rem 24rem `};
`;
const Title = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.9);
`;

const Text = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 3.2rem;
  letter-spacing: 0.01em;
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.7);
`;
const Text2 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 3.2rem;
  color: #00a3ff;
`;
const LinkText = styled.span`
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: 0.01em;
  opacity: 0.8;
  color: 00a3ff;
`;
const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: horizontal;
  align-items: center;
`;
