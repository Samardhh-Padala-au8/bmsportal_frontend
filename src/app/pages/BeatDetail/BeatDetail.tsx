import { Header } from 'app/components/organisms';
import styled from 'styled-components';
import * as SectionDiv from 'app/components/molecules';
//import arrdwn from 'app/assets/arrdwn.svg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import Image from 'react-bootstrap/Image';
import Footer from 'app/components/Footer';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { themeColors } from 'styles/theme';
import Card from 'react-bootstrap/Card';

const BodyDiv: any = SectionDiv.SectionDiv;
export function BeatDetail() {
  return (
    <div>
      {' '}
      <Header backgroundColor={themeColors.yellow} />
      <BodyDiv className="beatDetail">
        <RightDiv>
          <Card.Body>
            {/* <Form>
              <Title>Fill out the details of your beat</Title>
              <Text>
                Trim the audio to pick the best of your beat. Your beat should
                be no longer than 30 Sec and no shorter than 25 Sec.
              </Text>
              <Row>
                <Col lg={6} md={6} xs={24} sm={24}>
                  <Form.Group className="mb-3" span={6}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Downton Fire" />
                  </Form.Group>
                  <Form.Group className="mb-3" span={6}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Downton Fire" />
                  </Form.Group>
                  <Text>
                    eg. genre, mood, instrument and other keywords to describe
                    your beat
                  </Text>
                </Col>
                <Col lg={6} md={6} xs={24} sm={24}>
                  <Form.Group className="mb-3" span={6}>
                    <Form.Label>Key</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" span={6}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Downton Fire" />
                  </Form.Group>
                </Col>
              </Row>
            </Form> */}

            <div
              style={{
                marginTop: '0.8rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                borderTop: '0.1rem solid #E7E7E7',
              }}
            >
              <Row>
                <Col
                  span={6}
                  style={{
                    display: 'flex',
                    padding: '2.4rem 4rem',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Button
                    style={{
                      borderRadius: '10rem',
                      padding: '1.2rem 4.8rem',
                      height: '4.8rem',
                      background: '#FFFFFF',
                    }}
                  >
                    <ButtonText>previous</ButtonText>
                  </Button>
                </Col>
                <Col
                  span={6}
                  style={{
                    display: 'flex',
                    padding: '2.4rem 4rem',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Button
                    style={{
                      borderRadius: '10rem',
                      padding: '1.2rem 4.8rem',
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
          </Card.Body>
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
  display: flex;
  align-items: center;
  color: #6f848f;
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
    padding: 4rem;
    width: auto;
    justify-content: center;
  }
`;
const ButtonText = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  color: #d64568;
`;

const FormCol = styled(Col)`
  margin-top: 2.4rem;
`;
