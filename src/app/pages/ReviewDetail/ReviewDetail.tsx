import { Header } from 'app/components/organisms';
import styled from 'styled-components';
import * as SectionDiv from 'app/components/molecules';
import images from 'utils/constants/images';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Footer from 'app/components/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { themeColors } from 'styles/theme';
//import Dropdown from 'react-bootstrap/Dropdown';

const BodyDiv: any = SectionDiv.SectionDiv;
export function ReviewDetail() {
  return (
    <div>
      {' '}
      <Header backgroundColor={themeColors.yellow} />
      <BodyDiv className="beatDetail">
        <RightDiv>
          <Form>
            <Title>Review Details</Title>
            <Text>
              This is just one last step. Check the details, make sure It’s
              correct and hit the submit button!
            </Text>
            <div>
              <Row>
                <Col lg={4} md={4} xs={24} sm={24}>
                  <Title>Name</Title>
                  <Text>Downton Fire</Text>
                </Col>
                <Col lg={4} md={4} xs={24} sm={24}>
                  <Title>Key</Title>
                  <Text>c#</Text>
                </Col>
                <Col lg={4} md={4} xs={24} sm={24}>
                  <Title>Bpm</Title>
                  <Text>240</Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Title>Tags</Title>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} xs={24} sm={24}>
                  <Button1>Love</Button1>
                </Col>
                <Col lg={4} md={4} xs={24} sm={24}>
                  <Button1>Love</Button1>
                </Col>

                <Col lg={4} md={4} xs={24} sm={24}>
                  <Button1>Love</Button1>
                </Col>
              </Row>
            </div>
            <div>
              <Text
                style={{
                  color: '#1C262C',
                  fontSize: '1.2rem',
                  fontWeight: '400',
                  background: '#F3F5F8',
                }}
              >
                <Image
                  src={images.check}
                  style={{
                    marginBottom: '2.5rem',
                    marginRight: '1rem',
                    marginLeft: '0.5rem ',
                  }}
                  alt="logo"
                />
                I declare that I either or have been granted the rights to this
                beat/recording. And it’s compostion can be used on
                WeJammin.Also, it complies these{' '}
                <span style={{ color: '#5386E4', cursor: 'pointer' }}>
                  Terms and condintion{' '}
                </span>
                and{' '}
                <span style={{ color: '#5386E4', cursor: 'pointer' }}>
                  Copyright.
                </span>
              </Text>
            </div>
            <div>
              <Note>
                <NoteTitle>
                  {' '}
                  <Image
                    src={images.submitdetail}
                    style={{ marginRight: '1rem' }}
                    alt="logo"
                  />
                  NOTE: You can manage your beat and see Jams created on{' '}
                  <br></br>your beat on WeJammin APP
                </NoteTitle>
              </Note>
            </div>
          </Form>
          <div
            style={{
              marginTop: '4.8rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Row>
              <Col
                span={12}
                style={{
                  borderTop: '5px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <Button
                  style={{
                    borderRadius: '10rem',
                    padding: '1.2rem 1.6rem',
                    height: '4.8rem',
                    background: '#E7E7E7',
                    border: 'none',
                    textTransform: 'uppercase',
                  }}
                >
                  next
                </Button>
              </Col>
            </Row>
          </div>
        </RightDiv>
      </BodyDiv>
      <Footer />
    </div>
  );
}

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

  align-items: center;
  color: #6f848f;
`;

const RightDiv = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 4rem 4rem 4rem;
  border: 2px solid #0d0d0d;
  box-shadow: 0.2rem 0.8rem 0rem #d64568;
  border-radius: 1.6rem;
  background: #ffffff;

  justifycontent: 'center';
`;

const FormCol = styled(Col)`
  margin-top: 2.4rem;
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
const Button1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 4px;

  width: 60px;
  height: 32px;

  background: #ffffff;

  border: 1px solid #e7e7e7;
  border-radius: 100px;
`;
