import { Header } from 'app/components/organisms';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
//import { media } from 'styles/media';
import * as SectionDiv from 'app/components/molecules';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import { themeColors } from 'styles/theme';
import Footer from 'app/components/Footer';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInWithGoogle } from '../../../utils/firebase';
import { actionIds } from 'redux/types/actionsType';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useMemo } from 'react';
import { media } from 'styles/media';

const BodyDiv: any = SectionDiv.SectionDiv;
export function Login() {
  useMemo(() => {
    window.snapKitInit = () => {
      snap.loginkit.mountButton('login-button', {
        clientId: 'bc64daf2-aa25-45de-87ea-16fe82a0600a',
        redirectURI: 'http://localhost:3007/uploadaudio/step1',
        scopeList: ['user.display_name', 'user.bitmoji.avatar'],
        handleResponseCallback: () => {
          snap.loginkit.fetchUserInfo().then(data => {
            console.log(data);
            const response = data?.data?.me;
            const profile = {
              profile: {
                externalId: response.externalId,
                photos: response.bitmoji.avatar,
                name: response.displayName,
              },
              accessToken: 'dsaf4',
            };
            dispatch({
              type: actionIds.SNAPCHAT_CALL,
              payload: {
                profile,
                history,
                type: 'login',
              },
            });
          });
        },
      });
    };

    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        sjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://sdk.snapkit.com/js/v1/login.js';
      sjs.parentNode.insertBefore(js, sjs);
    })(document, 'script', 'loginkit-sdk');
  }, []);
  const responseGoogle = () => {
    signInWithGoogle().then((response: any) => {
      if (response) {
        const profile = {
          type: 'google',
          profile: {
            externalId: response.user.uid,
            photos: response.user.photoURL,
            name: response.user.displayName,
            email: response.user.email,
          },
          accessToken: response._tokenResponse.oauthIdToken,
        };
        dispatch({
          type: actionIds.GOOGLE_CALL,
          payload: {
            profile,
            history,
            type: 'login',
          },
        });
      }
    });
  };
  const responseFacebook = response => {
    console.log(response);
    if (response) {
      const profile = {
        type: 'facebook',
        profile: {
          externalId: response.userID,
          photos: response.picture?.data.url,
          name: response.name,
        },
        accessToken: response.accessToken,
      };
      dispatch({
        type: actionIds.FACEBOOK_CALL,
        payload: {
          profile,
          history,
          type: 'login',
        },
      });
    }
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const onSocial = route => {
    window.open(route);
  };
  const handleSubmit = values => {
    dispatch({
      type: actionIds.LOGIN_CALL,
      payload: values,
      history,
    });
  };
  return (
    <div>
      {' '}
      <Header
        backgroundColor={themeColors.yellow}
        color={themeColors.black}
        hovercolor={themeColors.black}
      />
      <BodyDiv
        className="login"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <RightDiv>
          <Card.Body>
            <Title>Welcome to Wejammin’</Title>
            <Text> Login to upload your beats</Text>{' '}
            <Imagediv>
              {' '}
              <Image src={images.login_image} alt="logo" />{' '}
            </Imagediv>
            <div
              style={{
                marginTop: '3rem',
                marginBottom: '1.6rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ width: '33.33%' }}>
                  <div
                    style={{
                      height: '0.1rem',
                      background: '#1C262C',
                      width: '100%',
                      opacity: '0.2',
                    }}
                  ></div>
                </div>
                <div>
                  <div>
                    <Text3>Login With</Text3>
                  </div>
                </div>
                <div style={{ width: '33.33%' }}>
                  <div
                    style={{
                      height: '0.1rem',
                      background: '#1C262C',
                      width: '100%',
                      opacity: '0.2',
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ cursor: 'pointer', marginRight: '1.6rem' }}>
                  <div id="login-button"></div>
                </div>
                <div style={{ cursor: 'pointer', marginRight: '1.6rem' }}>
                  <Image onClick={responseGoogle} src={images.google} />
                </div>
                <div style={{ cursor: 'pointer' }}>
                  <FacebookLogin
                    appId="1354735494950212"
                    autoLoad={false}
                    fields="name,email,picture"
                    scope="public_profile,user_friends"
                    callback={responseFacebook}
                    icon="fa-facebook"
                    render={renderProps => (
                      <Image
                        onClick={renderProps.onClick}
                        src={images.facebook_}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div style={{ marginTop: '1.6rem' }}>
              <Text1>
                New to Wejammin’?{' '}
                <Text2
                  onClick={() => {
                    onSocial(
                      'https://play.google.com/store/apps/details?id=com.wedigit.wejammin&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
                    );
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {' '}
                  Download
                </Text2>{' '}
                the app to get started.
              </Text1>
            </div>
          </Card.Body>
        </RightDiv>
      </BodyDiv>
      <Footer />
    </div>
  );
}

const Text1 = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.4rem;
  text-align: center;
  color: #1c262c;
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

  display: flex;
  align-items: center;

  color: #6f848f;
`;
const Cards = styled(Card)`
  background: #ffffff;

  border: 1px solid #e7e7e7;
  border-radius: 8px;

  ${media.mobile`padding: 1.6rem 2.4rem 0rem 2.4rem`};
  ${media.small`padding: 4rem 1.6rem;`};
  ${media.medium`padding: 4rem 1.6rem;`};
`;

const RightDiv = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #0d0d0d;
  box-shadow: 2px 8px 0px #d64568;
  border-radius: 1.6rem;
  background: #ffffff;
  .card-body {
    padding: 2.4rem;
    width: 31rem;
    justify-content: center;
  }
`;

const Imagediv = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NoteTitle = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;

  display: flex;
  align-items: center;

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
const Text3 = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  color: #1c262c;
`;

const Text2 = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 3.2rem;
  color: #00a3ff;
`;
