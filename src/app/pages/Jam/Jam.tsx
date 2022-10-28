import Footer from 'app/components/Footer';
import { Header } from 'app/components/organisms';
import { themeColors } from 'styles/theme';
import styled from 'styled-components';
import { media } from 'styles/media';
import Card from 'react-bootstrap/Card';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import * as SectionDiv from 'app/components/molecules';
const BodyDiv: any = SectionDiv.SectionDiv;

export function Jam() {
  return (
    <>
      <div style={{ background: themeColors.violet }} className="larged">
        <Header
          backgroundColor={themeColors.violet}
          color={themeColors.black}
          hovercolor={themeColors.black}
        />
        <BodyDiv className="jamm larged">
          <RightDiv>
            <Card.Body>
              <div style={{ display: 'flex' }}>
                <BackDiv style={{ width: '45%' }} />

                <div style={{ width: '55%', marginLeft: '4rem' }}>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div style={{ display: 'flex' }}>
                      <div style={{ marginRight: '1.6rem' }}>
                        {' '}
                        <Image
                          src={images.horizontalcardimage2}
                          alt="success"
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '100px',
                          }}
                        />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Title>metalhead2342</Title>
                        <Text>Sapna Malik</Text>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: '2.4rem',
                        letterSpacing: '0.08rem',
                        lineHeight: '1rem',
                        cursor: 'pointer',
                      }}
                    >
                      ...
                    </div>
                  </div>
                  <div style={{ marginTop: '1.6rem' }}>
                    <Text>
                      Relax and unwind with this beautiful melody by Pina Colada
                      Blues.
                    </Text>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: '0.1rem',
                      background: '#e7e7e7',
                      margin: '1.6rem 0',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '140%',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex' }}>
                      <Image
                        src={images.clapblack}
                        alt="success"
                        style={{ marginRight: '0.8rem' }}
                        width="21.41px"
                        height="22.95px"
                      />
                      <Text1>265</Text1>
                    </div>
                    <div>
                      <button className="music_play">
                        <Image
                          src={images.clapred}
                          style={{ marginRight: '0.8rem' }}
                          width="21.41px"
                          height="22.95px"
                        />
                        CLAP
                      </button>
                    </div>
                    <div></div>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: '0.1rem',
                      background: '#e7e7e7',
                      margin: '1.6rem 0',
                    }}
                  />
                  <div>
                    <Text1>BEAT</Text1>
                    <div
                      style={{
                        marginTop: '0.8rem',
                        background: '#eeeeee',
                        borderRadius: '0.8rem',
                        display: 'flex',
                        padding: '1.6rem',
                      }}
                    >
                      <div>
                        <Image
                          src={images.horizontalcardimage2}
                          alt="success"
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '4px',
                          }}
                        />
                      </div>
                      <div style={{ marginLeft: '1.6rem' }}>
                        <Title2>Heat wave</Title2>
                        <Text2 style={{ marginTop: '0.8rem' }}>
                          Pina Colada Blues
                        </Text2>
                      </div>
                    </div>
                  </div>
                  <BoxDiv style={{ marginTop: '3.2rem' }}>
                    <Title>Download the Wejammin’ app</Title>
                    <Text>
                      Get the Wejammin’ from the Google play store and start
                      jammin!
                    </Text>
                    <StyleButton
                      style={{
                        borderRadius: '10.4rem',
                        height: '4.8rem',
                        background:
                          'linear-gradient(90.02deg, #E25375 0.02%, #BB2549 99.98%)',
                        border: `1px solid #D64568`,
                        textTransform: 'uppercase',
                        color: 'white',
                      }}
                    >
                      Get the app
                    </StyleButton>
                  </BoxDiv>
                </div>
              </div>
            </Card.Body>
          </RightDiv>
        </BodyDiv>
        <BodyDiv className="jamm smalld">
          <RightDiv>
            <Card.Body>
              <Title>Download the Wejammin’ app</Title>
              <Text style={{ marginTop: '0.8rem' }}>
                Get the Wejammin’ from the Google play store and start jammin!
              </Text>
              <StyleButton
                style={{
                  borderRadius: '10.4rem',
                  height: '4.8rem',
                  background:
                    'linear-gradient(90.02deg, #E25375 0.02%, #BB2549 99.98%)',
                  border: `1px solid #D64568`,
                  textTransform: 'uppercase',
                  color: 'white',
                  marginTop: '2.4rem',
                }}
              >
                Get the app
              </StyleButton>
            </Card.Body>
          </RightDiv>
        </BodyDiv>
        <Footer />
      </div>
      <div style={{ background: themeColors.violet }} className="smalld">
        <div style={{ position: 'relative' }}>
          <Header
            backgroundColor={themeColors.violet}
            color={themeColors.violet}
            hovercolor={themeColors.black}
            bgimage={images.jampic}
            bc={false}
          />
          <div
            style={{
              position: 'absolute',
              zIndex: '1000',
              bottom: '1%',
              left: '3.5%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '92vw',
                justifyContent: 'space-between',
                alignItems: 'end',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={images.horizontalcardimage1}
                  alt="success"
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '100px',
                    marginRight: '0.8rem',
                  }}
                />
                <WhiteTitle>metalhead2342</WhiteTitle>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={images.mobileclap}
                  alt="success"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '100px',
                    marginBottom: '0.8rem',
                  }}
                />
                <WhiteText>243k</WhiteText>
              </div>
            </div>
            <div
              style={{
                marginTop: '1rem',
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <WhiteText style={{ width: '28rem' }}>
                Relax and unwind with this beautiful melody by Pina Colada
                Blues.
              </WhiteText>
              <div
                style={{
                  fontSize: '3.5rem',
                  color: `#E5E9F1`,
                  letterSpacing: '0.2rem',
                  paddingBottom: '1.6rem',
                  cursor: 'pointer',
                }}
              >
                ...
              </div>
            </div>
            <div>
              <div style={{ display: 'flex',
                  alignContent: 'center',
                  alignItems: 'center',marginBottom:'0.8rem'}}>
                <Image
                  src={images.horizontalcardimage2}
                  alt="success"
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '100px',
                    marginRight: '0.8rem',
                  }}
                />
                <WhiteSubText>@rechard’s Audio | Relax</WhiteSubText>
              </div>
            </div>
          </div>
        </div>
        <BodyDiv className="jamm smalld">
          <RightDiv>
            <Card.Body>
              <Title>Download the Wejammin’ app</Title>
              <Text style={{ marginTop: '0.8rem' }}>
                Get the Wejammin’ from the Google play store and start jammin!
              </Text>
              <StyleButton
                style={{
                  borderRadius: '10.4rem',
                  height: '4.8rem',
                  background:
                    'linear-gradient(90.02deg, #E25375 0.02%, #BB2549 99.98%)',
                  border: `1px solid #D64568`,
                  textTransform: 'uppercase',
                  color: 'white',
                  marginTop: '2.4rem',
                }}
              >
                Get the app
              </StyleButton>
            </Card.Body>
          </RightDiv>
        </BodyDiv>
        <Footer />
      </div>
    </>
  );
}

const RightDiv = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 2px solid #0d0d0d;
  box-shadow: 2px 8px 0px #d64568;
  border-radius: 1.6rem;
  background: #ffffff;
  ${media.mobile`margin-top: 0rem;`};
  ${media.medium`margin-top: 8rem;`};
  .card-body {
    ${media.mobile`padding: 2.4rem 2.4rem 3.2rem;`};
    ${media.small`padding: 4rem;`};
    padding: 4rem;
    width: 100%;
    justify-content: center;
  }
`;
const StyleButton = styled(Button)`
  ${media.mobile`width: 100% `};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 2.4rem;
  padding: 1.2rem 1.6rem;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
const BoxDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 2.4rem 3.2rem;
  gap: 2.4rem;
  background: #ffffff;
  border: 0.1rem solid #e7e7e7;
  border-radius: 0.8rem;
`;
const Title = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #1c262c;
  ${media.mobile` font-size: 1.6rem`};
  ${media.medium` font-size: 1.6rem `};
`;
const Title2 = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.6rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #1c262c;
`;
const Text = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  ${media.mobile` font-size: 1.4rem`};
  ${media.medium` font-size: 1.4rem `};
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  color: #6f848f;
`;
const Text2 = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  ${media.mobile` font-size: 1.4rem`};
  ${media.medium` font-size: 1.4rem `};
  line-height: 1.6rem;
  display: flex;
  align-items: center;
  color: #6f848f;
`;
const Text1 = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: #1c262c;
`;

const BackDiv = styled.div`
  background-image: url(${images.jampic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 0.8rem !important;
  overflow: hidden;
`;

const WhiteTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  display: flex;
  align-items: center;

  color: #e7e7e7;
`;

const WhiteText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #e7e7e7;
`;

const WhiteSubText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #e7e7e7;
`;
