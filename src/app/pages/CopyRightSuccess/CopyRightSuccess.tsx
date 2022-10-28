import { Header } from 'app/components/organisms';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import * as SectionDiv from 'app/components/molecules';
import { media } from 'styles/media';
import { themeColors } from 'styles/theme';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import Footer from 'app/components/Footer';
const BodyDiv: any = SectionDiv.SectionDiv;
export function CopyRightSuccess() {
  return (
    <div>
      {' '}
      <Header
        backgroundColor={themeColors.violet}
        color={themeColors.black}
        hovercolor={themeColors.black}
      />
      <BodyDiv className="copyright">
        <RightDiv>
          <Card.Body>
            <div style={{ marginBottom: '3rem' }}>
              <Image src={images.tracksu} alt="success" />
            </div>
            <div style={{ marginBottom: '0.8rem' }}>
              <Title>Copyright Claim submitted successfully</Title>
            </div>
            <div style={{ marginBottom: '2.4rem' }}>
              <Text>
                Thank you for sharing the details with us. Our team will get
                back to you soon.
              </Text>
            </div>
           
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

