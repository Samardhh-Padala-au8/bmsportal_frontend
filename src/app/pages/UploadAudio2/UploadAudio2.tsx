import { Header } from 'app/components/organisms';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import * as SectionDiv from 'app/components/molecules';
import { media } from 'styles/media';
import Footer from 'app/components/Footer';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { themeColors } from 'styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import images from 'utils/constants/images';
import { actionIds } from 'redux/types/actionsType';
import Image from 'react-bootstrap/Image';

const BodyDiv: any = SectionDiv.SectionDiv;
export function UploadAudio2() {
  const history = useHistory();
  const dispatch = useDispatch();

  const TAG_VALUES = [
    `Acapella`,
    `Acoustic`,
    `Afrobeats`,
    `Ambient`,
    `Beatbox`,
    `Country`,
    `Dance & EDM`,
    `Dance Hall`,
    `Deep House`,
    `Disco`,
    `Drum n Bass`,
    `Dubstep`,
    `Electronic`,
    `Folk`,
    `Hip-hop & Rap`,
    `House`,
    `Jazz`,
    `Latin`,
    `Other`,
    `Piano`,
    `Pop`,
    `R&B & Soul`,
    `Reggae`,
    `Reggaeton`,
    `Rock`,
    `Techno`,
    `Trance`,
    `Trap`,
    `Triphop`,
    `World`,
  ];
  const KEYS_VALUES = [
    `A major`,
    `A♭ major`,
    `A# minor`,
    `A minor`,
    `A♭ minor`,
    `B major`,
    `Bb major`,
    `B minor`,
    `B♭ minor`,
    `C# major`,
    `C major`,
    `C♭ major`,
    `C# minor`,
    `C minor`,
    `D major`,
    `D♭ major`,
    `D# minor`,
    `D minor`,
    `E major`,
    `E♭ major`,
    `E minor`,
    `E♭ minor`,
    `F# major`,
    `F major`,
    `F# minor`,
    `F minor`,
    `G major`,
    `G♭ major`,
    `G# minor`,
    `G minor`,
  ];
  const [selv, setSelv] = useState([]);

  const [musicfile, setMusicfile] = useState(null);
  const [musicdata, setMusicdata] = useState({
    name: '',
    key: '',
    tags: '',
    bpm: '',
  });
  const [show, setShow] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const data = useSelector((state: any) => {
    return state;
  });

  useEffect(() => {
    if (
      musicdata.name.length > 0 &&
      musicdata.key.length > 0 &&
      musicdata.tags.length > 0 &&
      musicdata.bpm.length > 0
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [musicdata]);
  useEffect(() => {
    if (data.musicReducer.musicdata !== null) {
      setMusicdata(data.musicReducer.musicdata);
      setSelv(data.musicReducer.musicdata.tags);
    }
  }, [data.musicReducer.musicdata]);
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  useEffect(() => {
    if (data.musicReducer.musicconstant !== null) {
      let convfile = dataURLtoFile(
        data.musicReducer.musicconstant.base64URL,
        data.musicReducer.musicconstant.name,
      );
      console.log(convfile);
      setMusicfile(convfile);
    }
  }, [data.musicReducer.musicconstant]);

  const nextstep = () => {
    if (show) {
      handleEncode();
      history.push('/uploadaudio/step3');
    }
  };

  const handleEncode = () => {
    const formData = new FormData();
    formData.append('type', 'music');
    formData.append('track', musicfile);
    dispatch({
      type: actionIds.MUSIC_TRIM_CONSTANT,
      payload: {
        music: formData,
      },
    });
    dispatch({
      type: actionIds.SUBMIT_DATA,
      payload: musicdata,
    });
    // dispatch({
    //   type: actionIds.UPLOAD_MUSIC,
    //   payload: {
    //     music: formData,
    //   },
    // });
  };

  const previous = () => {
    history.push('/uploadaudio/step1');
  };

  const handleChange = event => {
    setMusicdata({ ...musicdata, [event.target.name]: event.target.value });
  };
  const selectedValues = values => {
    setMusicdata({ ...musicdata, tags: values });
  };
  return (
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
          2/3
        </div>
        <RightDiv>
          <Card.Body>
            {musicfile && (
              <div>
                <Title>Fill out the details of your beat</Title>
                <Text>
                  Trim the audio to pick the best of your beat. Your beat should
                  be no longer than 30 Sec and no shorter than 25 Sec.
                </Text>

                <Form style={{ marginTop: '1.6rem' }}>
                  <Row>
                    <Col lg={6} md={6} xs={24} sm={24}>
                      <Form.Group className="mb-3">
                        <Text1>Name</Text1>
                        <Form.Control
                          style={{
                            borderRadius: '0.8rem',
                            background: '#F3F5F8',
                            padding: '0.8rem ',
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: '1.2rem',
                            border: 'none',
                          }}
                          type="text"
                          name="name"
                          placeholder="Enter song name"
                          value={musicdata.name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Text1>Genre</Text1>
                        <div
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Multiselect
                            customCloseIcon={
                              <>
                                <Image
                                  src={images.blackcross}
                                  style={{
                                    marginLeft: '0.8rem',
                                    cursor: 'pointer',
                                  }}
                                />
                              </>
                            }
                            onSelect={selectedValues}
                            selectedValues={selv}
                            options={TAG_VALUES}
                            isObject={false}
                            hidePlaceholder={true}
                            avoidHighlightFirstOption={true}
                            style={{
                              chips: {
                                padding: '0rem 0.8rem',
                                height: '2.4rem',
                                background: `#FFFFFF`,
                                border: `1px solid #E7E7E7`,
                                borderRadius: `10rem`,
                                color: '#1C262C',
                                width: 'auto',
                              },
                              multiselectContainer: {
                                background: '#FFFFFF',
                                'border-radius': '0.4rem',
                                color: '#1C262C',
                                'font-size': '1.2rem',
                                border: 'none',
                              },
                              searchBox: {
                                borderRadius: '0.8rem',
                                background: '#F3F5F8',
                                padding: '0.6rem ',
                                border: 'none',
                                'font-size': '1.2rem',
                              },
                              optionContainer: {
                                color: isHover ? 'black' : 'red',
                              },
                              option: {
                                color: 'black',
                              },
                            }}
                          />
                        </div>
                      </Form.Group>
                      <Text>
                        eg. genre, mood, instrument and other keywords to
                        describe your beat
                      </Text>
                    </Col>
                    <Col lg={6} md={6} xs={24} sm={24}>
                      <Form.Group className="mb-3">
                        <Text1>Key</Text1>

                        <Form.Select
                          style={{
                            borderRadius: '0.8rem',
                            background: '#F3F5F8',
                            padding: '0.8rem ',
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: '1.2rem',
                            border: 'none',
                          }}
                          aria-label="Default select example"
                          placeholder="Select Key"
                          name="key"
                          value={musicdata.key}
                          onChange={handleChange}
                        >
                          <option>Select Key</option>
                          {KEYS_VALUES.map((x, y) => (
                            <option value={x} key={y}>
                              {x}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Text1>BPM</Text1>

                        <Form.Control
                          style={{
                            borderRadius: '0.8rem',
                            background: '#F3F5F8',
                            padding: '0.8rem ',
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: '1.2rem',
                            border: 'none',
                          }}
                          type="text"
                          placeholder="Enter BPM (only numbers, eg. 120)"
                          name="bpm"
                          value={musicdata.bpm}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}
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
              Previous
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
            >
              next
            </StyleButton>
          </div>
        </RightDiv>
      </BodyDiv>
      <Footer />
    </div>
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
  font-size: 1rem;
  line-height: 1.6rem;
  display: flex;
  align-items: center;
  color: #6f848f;
`;
const Text1 = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #1c262c;
  margin-top: 1.6rem;
  margin-bottom: 0.8rem;
`;
