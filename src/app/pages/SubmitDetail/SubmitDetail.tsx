import { Header } from 'app/components/organisms';
import styled from 'styled-components';
import * as SectionDiv from 'app/components/molecules';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import Footer from 'app/components/Footer';
import Button from 'react-bootstrap/Button';
import { themeColors } from 'styles/theme';
import { useHistory } from 'react-router-dom';

import { media } from 'styles/media';

const BodyDiv: any = SectionDiv.SectionDiv;
export function SubmitDetail() {
  const history = useHistory();
  const goto = () => {
    history.push('/login');
  };
  const onredirect = route => {
    history.push(route);
  };
  return (
    <div>
      {' '}
      <Header
        backgroundColor={themeColors.yellow}
        color={themeColors.black}
        hovercolor={themeColors.black}
      />
      <BodyDiv className="submitDetail">
        <RightDiv>
          <div>
            <Title>Upload your beats and tracks to Wejammin’</Title>
          </div>
          <Note>
            <NoteTitle>
              {' '}
              <Image
                src={images.submitdetail}
                style={{ marginRight: '1rem' }}
                alt="logo"
              />
              NOTE: Please read this before submitting:
            </NoteTitle>
          </Note>
          <div style={{ marginTop: '1.6rem' }}>
            <ul>
              <li>
                <Text>
                  Beat uploads are currently limited to 3 beats per producer
                  within any 24-hour period
                </Text>
              </li>
              <li>
                {' '}
                <Text>Uploaded beats will appear on your user profile </Text>
              </li>
              <li>
                <Text>
                  Every Jam made on your beat will credit your user profile
                </Text>
              </li>
              <li>
                <Text>
                  Beats in Wejammin’ are short instrumental loops. Usually 24-32
                  bars long, with a duration of no more than 60 seconds each.
                  During this upload process you will be able to select a region
                  of your uploaded audio file which will be submitted as your
                  beat
                </Text>
              </li>
              <li>
                <Text>
                  Make sure you enter the correct tempo (BPM) and key. Without
                  these the timed/tuned vocal effects won’t be in sync
                </Text>{' '}
              </li>
              <li>
                <Text>
                  All uploaded beats are scanned for copyright protection
                  purposes. By uploading a beat you warrant that you have the
                  rights or permission to do so. See our{' '}
                  <span
                    style={{ color: '#5386E4', cursor: 'pointer' }}
                    onClick={() => onredirect('/faqs')}
                  >
                    FAQ
                  </span>{' '}
                  here
                </Text>
              </li>
              <li>
                {' '}
                <Text>Silent audio files are not accepted </Text>
              </li>
            </ul>
          </div>
          <Button className="home_button all_margin_top" onClick={goto}>
            Get started{' '}
          </Button>
        </RightDiv>
      </BodyDiv>
      <Footer />
    </div>
  );
}

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
  font-size: 16px;
  line-height: 32px;

  align-items: center;

  color: #6f848f;
`;

const RightDiv = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid #0d0d0d;
  box-shadow: 2px 8px 0px #d64568;
  border-radius: 16px;
  background: #ffffff;
  ${media.mobile`padding: 1.6rem ;`};
  ${media.medium`padding: 3.2rem;`};
`;

const NoteTitle = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 3.2rem;

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
