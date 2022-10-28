import { Header } from 'app/components/organisms';
import imgs from 'app/assets/imgs.svg';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import * as SectionDiv from 'app/components/molecules';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { media } from 'styles/media';
import Footer from 'app/components/Footer';
import Button from 'react-bootstrap/Button';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { actionIds } from 'redux/types/actionsType';
import { themeColors } from 'styles/theme';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ImageCropper } from 'app/components/molecules';
import music from 'app/assets/music.svg';

const BodyDiv: any = SectionDiv.SectionDiv;
export function UploadAudio() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const inputFileRef: any = useRef();
  const inputMusicRef: any = useRef();
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  const dispatch = useDispatch();
  const [imgname, setImgname] = useState('');
  const [imgfile, setImgfile] = useState(null);
  const [musicname, setMusicname] = useState('');
  const [musicfile, setMusicfile] = useState(null);
  const [uncropimage, setUncropImage] = useState(null);
  const [uncropimagename, setUncropImagename] = useState(null);
  const [file64, setFile64] = useState(null);
  const [musicerror, setMusicerror] = useState(false);
  const [imageerror, setImageerror] = useState(false);
  const data = useSelector((state: any) => {
    return state;
  });
  const handleDel = () => {
    setImgfile(null);
  };
  const uploadFile = () => {
    inputFileRef.current.click();
  };
  const uploadMusicFile = () => {
    inputMusicRef.current.click();
  };
  const onFileChange = event => {
    if (
      event.target.files[0].type == 'image/png' ||
      event.target.files[0].type == 'image/jpg' ||
      event.target.files[0].type == 'image/jpeg'
    ) {
      setImageerror(false);
      if (event) {
        handleShow();
      }
      setUncropImage(event.target.files[0]);
      let namecheck = event.target.files[0].name;
      if (namecheck.length > 20) {
        namecheck = namecheck.substring(0, 15) + '...';
      }
      setUncropImagename(namecheck);
    } else {
      setImageerror(true);
    }
  };
  const handleMusicDel = () => {
    setShow(false);
    setMusicfile(null);
  };
  const getBase64 = file => {
    return new Promise(resolve => {
      let baseURL: any = '';
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const onMusicChange = event => {
    if (event.target.files[0].type === 'audio/wav') {
      setMusicerror(false);
      setMusicfile(event.target.files[0]);
      let namecheck = event.target.files[0].name;
      if (namecheck.length > 20) {
        namecheck = namecheck.substring(0, 20) + '...';
      }
      setMusicname(namecheck);
      let file = event.target.files[0];
      setShow(true);
      getBase64(file)
        .then(result => {
          file['base64'] = result;
          setFile64({
            base64URL: result,
            name: namecheck,
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setMusicerror(true);
    }
  };
  const nextstep = () => {
    if (show) {
      dispatch({
        type: actionIds.MUSIC_CONSTANT,
        payload: file64,
      });
      history.push('/uploadaudio/step2');
    }
  };
  const previous = () => {
    history.push('/submitdetail');
  };
  const ErrorDiv = ({ uploadfile, fileref, filechange, type }) => {
    return (
      <UploadDivError>
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Image src={images.erroroutline} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Text
              style={{
                color: `#DC3545`,
                fontSize: '1.2rem',
                fontWeight: '400',
              }}
            >
              Opps! This file format is not supported.{' '}
              {type === 'audio' ? <span>Upload .wav only.</span> : ''} Please
              <span
                style={{
                  color: '#5386E4',
                  cursor: 'pointer',
                }}
                onClick={uploadfile}
              >
                {' '}
                Try again
              </span>
            </Text>
          </div>
        </div>
        <input
          type="file"
          ref={fileref}
          style={{ display: 'none' }}
          onChange={filechange}
          accept={`${type}/*`}
        />
      </UploadDivError>
    );
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
          1/3
        </div>
        <RightDiv>
          <Card.Body>
            <Form>
              <div>
                <Form>
                  <Title>Upload the Audio file and Cover Art</Title>
                  <Text>
                    Upload your audio file and the cover art below. Your audio
                    file should be no longer than 30 Sec.
                  </Text>
                  <div style={{ marginTop: '3.2rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      <FlexDiv>
                        <Text1>Upload the Audio file*</Text1>
                        {musicerror ? (
                          <ErrorDiv
                            uploadfile={uploadMusicFile}
                            fileref={inputMusicRef}
                            filechange={onMusicChange}
                            type="audio"
                          />
                        ) : (
                          <UploadDiv>
                            <div
                              style={{
                                justifyContent: 'center',
                                display: 'flex',
                              }}
                            >
                              <Image src={music} />
                            </div>

                            {musicfile ? (
                              <NameDiv>
                                <p
                                  style={{
                                    color: `#1C262C`,
                                    fontSize: '1.2rem',
                                    fontWeight: '400',
                                  }}
                                >
                                  {musicname}
                                </p>
                                <Image
                                  src={images.del}
                                  style={{
                                    cursor: 'pointer',
                                    width: '2.4rem',
                                    height: '2.4rem',
                                    marginLeft: '1.6rem',
                                  }}
                                  onClick={handleMusicDel}
                                />
                              </NameDiv>
                            ) : (
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                }}
                              >
                                <div style={{ textAlign: 'center' }}>
                                  <Text
                                    style={{
                                      color: `#BEC7DB`,
                                      fontSize: '1.2rem',
                                      fontWeight: '400',
                                    }}
                                  >
                                    Drag and drop your Audio file here or
                                    <span
                                      style={{
                                        color: '#6882F0',
                                        cursor: 'pointer',
                                      }}
                                      onClick={uploadMusicFile}
                                    >
                                      {' '}
                                      Browse.{' '}
                                    </span>
                                    Must be: .wav
                                  </Text>
                                </div>
                              </div>
                            )}
                            <input
                              type="file"
                              ref={inputMusicRef}
                              style={{ display: 'none' }}
                              onChange={onMusicChange}
                              accept="audio/*"
                            />
                          </UploadDiv>
                        )}
                      </FlexDiv>
                      <FlexDiv2>
                        <Text1>Upload the Cover Art (Optional)</Text1>
                        {imageerror ? (
                          <ErrorDiv
                            uploadfile={uploadFile}
                            fileref={inputFileRef}
                            filechange={onFileChange}
                            type="image"
                          />
                        ) : (
                          <UploadDiv>
                            <div
                              style={{
                                width: '100%',
                                justifyContent: 'center',
                                display: 'flex',
                              }}
                            >
                              <Image src={imgs} />
                            </div>
                            {imgfile ? (
                              <NameDiv>
                                <p
                                  style={{
                                    color: `#1C262C`,
                                    fontSize: '1.2rem',
                                    fontWeight: '400',
                                  }}
                                >
                                  {imgname}
                                </p>
                                <Image
                                  src={images.del}
                                  style={{
                                    cursor: 'pointer',
                                    width: '2.4rem',
                                    height: '2.4rem',
                                    marginLeft: '1.6rem',
                                  }}
                                  onClick={handleDel}
                                />
                              </NameDiv>
                            ) : (
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                }}
                              >
                                <div style={{ textAlign: 'center' }}>
                                  <Text
                                    style={{
                                      color: `#BEC7DB`,
                                      fontSize: '1.2rem',
                                      fontWeight: '400',
                                    }}
                                  >
                                    Drag and drop your Cover Art here or
                                    <Text
                                      style={{
                                        color: '#6882F0',
                                        fontSize: '1.2rem',
                                        fontWeight: '400',

                                        cursor: 'pointer',
                                      }}
                                      onClick={uploadFile}
                                    >
                                      {' '}
                                      Browse.{' '}
                                    </Text>
                                    . Must be: .jpeg, .jpg, or .png
                                  </Text>
                                </div>
                              </div>
                            )}
                            <input
                              type="file"
                              ref={inputFileRef}
                              style={{ display: 'none' }}
                              onChange={onFileChange}
                              accept="image/*"
                            />
                          </UploadDiv>
                        )}
                      </FlexDiv2>
                    </div>
                  </div>
                </Form>
                <ImageCropper
                  show={show2}
                  handleClose={handleClose}
                  image={uncropimage}
                  imgname={uncropimagename}
                  setimagefile={setImgfile}
                  setImgname={setImgname}
                />
              </div>
            </Form>
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
              caNCEL
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
const FlexDiv = styled.div`
  ${media.mobile`width: 100% `};
  ${media.small`width: 100% `};
  ${media.medium`width: 48%;`};
  ${media.medium`margin-right: 1.6rem;`};
`;
const FlexDiv2 = styled.div`
  ${media.mobile`width: 100% `};
  ${media.small`width: 100% `};
  ${media.medium`width: 48%;`};
  ${media.mobile`margin-top: 1.6rem;`};
  ${media.medium`margin-top: 0rem;`};
`;
const Title = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 0.02em;
  color: #1c262c;
  display: flex;
  align-item: center;
`;
const Text = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.4rem;

  color: #6f848f;
`;
const Text1 = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;

  display: flex;
  align-items: center;

  color: #1c262c;
`;
const UploadDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem 1.6rem;
  gap: 1rem;
  margin-top: 0.8rem;
  background: #ffffff;
  border: 2px dashed #e7e7e7;
  border-radius: 0.8rem;
  height: 16rem;
`;

const UploadDivError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem 1.6rem;
  gap: 1rem;
  margin-top: 0.8rem;
  background: #ffffff;
  border: 2px dashed #dc3545;
  border-radius: 0.8rem;
  height: 16rem;
`;

const NameDiv = styled.div`
  height: 5.6rem;
  padding: 1.6rem;
  background: #e7e7e7;
  color: #1c262c;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-between;
  width:100%;
`;
