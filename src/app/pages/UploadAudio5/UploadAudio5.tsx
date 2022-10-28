import { Header } from 'app/components/organisms';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import * as SectionDiv from 'app/components/molecules';
import { media } from 'styles/media';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { themeColors } from 'styles/theme';
import { useHistory } from 'react-router-dom';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import Footer from 'app/components/Footer';
const BodyDiv: any = SectionDiv.SectionDiv;
export function UploadAudio5() {
  const history = useHistory();
  const [show, setShow] = useState(false);

  return (
    <div>
      {' '}
      <Header
        backgroundColor={themeColors.yellow}
        color={themeColors.black}
        hovercolor={themeColors.black}
      />
      <BodyDiv className="uploadAudio">
        <RightDiv>
          <Card.Body>
            <div style={{ marginBottom: '3rem' }}>
              <Image src={images.limit} alt="success" />
            </div>
            <div style={{ marginBottom: '0.8rem' }}>
              <Title>
                Oops! Looks like you’ve reached maximum limit of submissions
                within 24-hour.
              </Title>
            </div>
            <div style={{ marginBottom: '2.4rem' }}>
              <Text>
                Beat uploads are currently limited to 3 beats per producer
                within any 24-hour period. You can submit a beat after 24-hour
                period.
              </Text>
            </div>
            <StyleButton
              style={{
                borderRadius: '10.4rem',
                padding: '1.2rem 4.8rem',
                height: '4.8rem',
                background:
                  'linear-gradient(90.02deg, #E25375 0.02%, #BB2549 99.98%)',
                border: 'none',
                textTransform: 'uppercase',
                color: 'white',
                width: '100%',
              }}
            >
              Okay!
            </StyleButton>
          </Card.Body>
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
  justify-content: center;
  .card-body {
    ${media.mobile`padding: 2.4rem;`};
    ${media.small`padding: 10rem 5rem;`};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyleButton = styled(Button)`
  ${media.mobile`width: 100%;`};
  ${media.small`width: 100%;`};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 2.4rem;
`;

const Title = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 3.2rem;
  letter-spacing: 0.02em;
  color: #1c262c;
  display: flex;
  align-item: center;
  text-align: center;
`;
const Text = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: #6f848f;

  display: inherit;
  text-align: center !important;
  width: 100%;
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

const NameDiv = styled.div`
  height: 5.6rem;
  padding: 1.6rem;
  background: #e7e7e7;
  color: #1c262c;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-between;
  min-width: 20rem;
`;
