/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from 'app/components/organisms';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import * as SectionDiv from 'app/components/molecules';

import Form from 'react-bootstrap/Form';
import { media } from 'styles/media';
import Footer from 'app/components/Footer';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import images from 'utils/constants/images';
import { themeColors } from 'styles/theme';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionIds } from 'redux/types/actionsType';
import Spinner from 'react-bootstrap/Spinner';

const BodyDiv: any = SectionDiv.SectionDiv;
export function UploadAudio3() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [mdata, setMData] = useState(null);
  const [idata, setIData] = useState(null);
  const [murl, setMurl] = useState(null);
  const [iurl, setIurl] = useState(null);
  const [trackdata, setTrackdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const data = useSelector((state: any) => {
    return state;
  });
  useEffect(() => {
    if (data.musicReducer.musictrimconstant !== null) {
      setMData(data.musicReducer.musictrimconstant);
    }
  }, [data.musicReducer.musictrimconstant]);
  useEffect(() => {
    if (data.musicReducer.musicdata !== null) {
      setTrackdata(data.musicReducer.musicdata);
    }
  }, [data.musicReducer.musicdata]);
  useEffect(() => {
    if (data.musicReducer.imageconstant !== null) {
      setIData(data.musicReducer.imageconstant);
    }
  }, [data.musicReducer.imageconstant]);
  useEffect(() => {
    if (data.submitReducer.music !== null) {
      setMurl(data.submitReducer.music);
    }
  }, [data.submitReducer.music]);
  useEffect(() => {
    if (data.submitReducer.track !== null) {
      setLoading(false);
      dispatch({
        type: actionIds.NULL_BEAT,
      });
      history.push('/uploadaudio/uploaded');
    }
  }, [data.submitReducer.track]);
  useEffect(() => {
    if (data.submitReducer.image !== null) {
      setIurl(data.submitReducer.image);
    }
  }, [data.submitReducer.image]);
  useEffect(() => {
    if (murl !== null) {
      dispatch({
        type: actionIds.SUBMIT_TRACK,
        payload: {
          track: iurl
            ? {
                name: trackdata.name,
                tags: trackdata.tags,
                bpm: 200,
                key: trackdata.key,
                type: 'Beat',
                coverUrl: iurl,
                url: murl,
                userId: localStorage.getItem('userId'),
                duration: 30000,
                metadata: {
                  artist: 'artist',
                },
              }
            : {
                name: trackdata.name,
                tags: trackdata.tags,
                bpm: 200,
                key: trackdata.key,
                type: 'Beat',

                url: murl,
                userId: localStorage.getItem('userId'),
                duration: 30000,
                metadata: {
                  artist: 'artist',
                },
              },
          history,
        },
      });
    }
  }, [murl]);
  const nextstep = () => {
    setLoading(true);
    if (mdata && show) {
      dispatch({
        type: actionIds.UPLOAD_MUSIC,
        payload: mdata,
      });
      if (idata) {
        dispatch({
          type: actionIds.UPLOAD_IMAGE,
          payload: idata,
        });
      }
    }
  };
  const previous = () => {
    history.push('/uploadaudio/step2');
  };
  return (
    trackdata && (
      <div>
        {' '}
        <Header
          backgroundColor={themeColors.yellow}
          color={themeColors.black}
          hovercolor={themeColors.black}
        />
        <BodyDiv className="uploadAudio">
          <div
            style={{
              color: '#1C262C',
              fontWeight: '700',
              fontSize: '20px',
              textAlign: 'right',
              marginBottom: '1.6rem',
              lineHeight: '32px',
            }}
          >
            3/3
          </div>
          <RightDiv>
            <Card.Body>
              <div>
                <Form>
                  <Title>Review Details</Title>
                  <Text>
                    This is just one last step. Check the details, make sure
                    It’s correct and hit the submit button!
                  </Text>
                  <div
                    style={{
                      marginTop: '3.2rem',
                      background: '#F3F5F8',
                      padding: '2.4rem',
                      borderRadius: `0.8rem`,
                    }}
                  >
                    <Row>
                      <Col lg={4} md={4} xs={24} sm={24}>
                        <Title3>Name</Title3>
                        <Text1>{trackdata.name}</Text1>
                      </Col>
                      <Col lg={4} md={4} xs={24} sm={24}>
                        <Title1>Key</Title1>
                        <Text1>{trackdata.key}</Text1>
                      </Col>
                      <Col lg={4} md={4} xs={24} sm={24}>
                        <Title1>Bpm</Title1>
                        <Text1>{trackdata.bpm}</Text1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Title1 style={{ marginTop: '1.6rem' }}>Tags</Title1>
                      </Col>
                    </Row>

                    <div style={{ marginTop: '0.8rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                        }}
                      >
                        {trackdata.tags.map((data, index) => (
                          <div key={index}>
                            <Tags>{data}</Tags>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: '1.6rem',
                      background: '#F3F5F8',
                      padding: '2.4rem',
                      borderRadius: `0.8rem`,
                    }}
                  >
                    <div>
                      <Form.Check
                        name="group1"
                        type={'checkbox'}
                        style={{ display: 'flex' }}
                      >
                        <Form.Check.Input
                          type={'checkbox'}
                          style={{
                            width: '18px',
                            height: '18px',
                            marginRight: '0.2rem',
                            marginTop: '0.4rem',
                          }}
                          onClick={() => setShow(prev => !prev)}
                        />
                        <Form.Check.Label style={{ flex: 90 }}>
                          I declare that I either or have been granted the
                          rights to this beat/recording. And it’s compostion can
                          be used on WeJammin.Also, it complies these Terms and
                          condintion and Copyright.
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                  </div>
                  <div>
                    <Note>
                      <NoteTitle>
                        {' '}
                        <Image
                          src={images.submitdetail}
                          style={{ marginRight: '1rem', marginTop: '0.3rem' }}
                          alt="logo"
                        />
                        <span>
                          NOTE:{' '}
                          <span style={{ fontWeight: '500' }}>
                            You can manage your beat and see Jams created on
                            your beat on WeJammin APP
                          </span>
                        </span>
                      </NoteTitle>
                    </Note>
                  </div>
                </Form>
              </div>
            </Card.Body>
            <div
              style={{
                marginTop: '0.8rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                borderTop: '0.1rem solid #E7E7E7',
                padding: '2.4rem 1.6rem',
              }}
            >
              <StyleButton
                style={{
                  borderRadius: '10rem',
                  height: '4.8rem',
                  background: '#FFFFFF',
                  textTransform: 'uppercase',
                  color: '#D64568',
                  boxShadow: '0px -1px 0px #E7E7E7',
                  border: `1px solid #D64568`,
                }}
                onClick={previous}
              >
                previous
              </StyleButton>

              <StyleButton
                style={
                  show
                    ? {
                        borderRadius: '10.4rem',
                        height: '4.8rem',
                        background:
                          'linear-gradient(90.02deg, #E25375 0.02%, #BB2549 99.98%)',
                        border: `1px solid #D64568`,
                        textTransform: 'uppercase',
                        color: 'white',
                      }
                    : {
                        borderRadius: '10.4rem',
                        height: '4.8rem',
                        background: '#E7E7E7',
                        textTransform: 'uppercase',
                        color: '#86959E',
                        border: `1px solid #E7E7E7`,
                        boxShadow: 'none !important',
                      }
                }
                onClick={nextstep}
                disabled={loading}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {' '}
                  {loading && (
                    <Spinner
                      as="div"
                      animation="border"
                      role="status"
                      aria-hidden="true"
                      style={{ marginRight: '0.8rem' }}
                    />
                  )}
                  Submit
                </div>
              </StyleButton>
            </div>
          </RightDiv>
        </BodyDiv>
        <Footer />
      </div>
    )
  );
}

const RightDiv = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #0d0d0d;
  box-shadow: 2px 8px 0px #d64568;
  border-radius: 1.6rem;
  background: #ffffff;

  .card-body {
    padding: 4rem;
    width: auto;
    justify-content: center;
  }
`;

const StyleButton = styled(Button)`
  ${media.mobile`margin-top: 1.6rem;`};
  ${media.medium`margin-top: 0rem;`};
  ${media.mobile`width: 13.6rem `};
  ${media.small`width: 13..6rem `};
  ${media.medium`width: 11.2rem `};
  ${media.mobile`margin-left: 0.8rem `};
  ${media.medium`margin-left: 1.6rem `};
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

const Title = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.2rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #1c262c;
`;
const Text = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  color: #6f848f;
`;
const TextSelect = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: #1c262c;
`;
const Title1 = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 1.2rem;
line-height: 1.6rem;
background: '#F3F5F8',
display: flex;
align-items: center;
${media.mobile`margin-top: 1.6rem;`};
${media.medium`margin-top: 0rem;`};
color: #1C262C;
`;
const Title3 = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 1.2rem;
line-height: 1.6rem;
background: '#F3F5F8',
display: flex;
align-items: center;
color: #1C262C;
`;
const Text1 = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  color: #1c262c;
`;
const NoteTitle = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  ${media.mobile`align-items: start;`};
  ${media.medium`align-items: center;`};
  color: #ff7e07;
`;
const Note = styled.div`
  margin-top: 1.6rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  background: rgba(255, 193, 7, 0.2);
  border-radius: 8px;
`;
const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  margin-right: 0.8rem;
  background: #ffffff;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.4rem;
  border: 1px solid #e7e7e7;
  border-radius: 100px;
  color: #1c262c;
`;
