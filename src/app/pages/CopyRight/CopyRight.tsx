import Footer from 'app/components/Footer';
import { Header } from 'app/components/organisms';
import { themeColors } from 'styles/theme';
import styled from 'styled-components';
import { media } from 'styles/media';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as SectionDiv from 'app/components/molecules';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionIds } from 'redux/types/actionsType';
import { useHistory } from 'react-router-dom';
const BodyDiv: any = SectionDiv.SectionDiv;
export function CopyRight() {
  const [copyrightdata, setCopyrightdata] = useState({
    name: '',
    email: '',
    phone: '',
    contentLink: '',
    message: '',
  });
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get('link');
    setCopyrightdata({
      ...copyrightdata,
      [`contentLink`]: term,
    });
  }, []);

  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = event => {
    setCopyrightdata({
      ...copyrightdata,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = () => {
    dispatch({
      type: actionIds.POST_COPYRIGHT,
      payload: {
        copyright: copyrightdata,
      },
      history,
    });
  };
  return (
    <div style={{ background: themeColors.violet }}>
      <Header
        backgroundColor={themeColors.violet}
        color={themeColors.black}
        hovercolor={themeColors.black}
      />
      <BodyDiv className="copyright">
        <RightDiv>
          <Card.Body>
            <div>
              <Title>Copyright claim submission</Title>
              <Text>
                Please fill out the form below to inform Wejammin' of an
                infringement or other legal claim related to content on the
                Wejammin' app.
              </Text>

              <Form style={{ marginTop: '1.6rem' }} autoComplete="nope">
                <Row>
                  <Col lg={6} md={6} xs={24} sm={24}>
                    <Form.Group className="mb-3">
                      <Text1>
                        Name<span style={{ color: themeColors.alert }}>*</span>
                      </Text1>
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
                        value={copyrightdata.name}
                        onChange={handleChange}
                        autoComplete="new-password"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Text1>
                        Phone number
                        <span style={{ color: themeColors.alert }}>*</span>
                      </Text1>
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
                        name="phone"
                        placeholder="Enter your phone number"
                        value={copyrightdata.phone}
                        onChange={handleChange}
                        autoComplete="new-password"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} xs={24} sm={24}>
                    <Form.Group className="mb-3">
                      <Text1>
                        Email<span style={{ color: themeColors.alert }}>*</span>
                      </Text1>
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
                        name="email"
                        placeholder="Enter your email"
                        value={copyrightdata.email}
                        onChange={handleChange}
                        autoComplete="nope"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Text1>
                        Content link
                        <span style={{ color: themeColors.alert }}>*</span>
                      </Text1>

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
                        placeholder="Add the content link"
                        name="contentLink"
                        value={copyrightdata.contentLink}
                        onChange={handleChange}
                        autoComplete="nope"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Text1>Your message(Optional)</Text1>
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
                        placeholder="Type your mesage here"
                        name="message"
                        value={copyrightdata.message}
                        onChange={handleChange}
                        autoComplete="nope"
                      />
                    </Form.Group>
                  </Col>
                </Row>
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
                borderRadius: '10.4rem',
                height: '4.8rem',
                background:
                  'linear-gradient(90.02deg, #E25375 0.02%, #BB2549 99.98%)',
                border: `1px solid #D64568`,
                textTransform: 'uppercase',
                color: 'white',
              }}
              onClick={handleSubmit}
            >
              SUBMIT
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
  ${media.mobile`margin-top: 0rem;`};
  ${media.medium`margin-top: 8rem;`};
  .card-body {
    padding: 4rem;
    width: auto;
    justify-content: center;
  }
`;
const StyleButton = styled(Button)`
  ${media.mobile`margin-top: 1.6rem;`};
  ${media.medium`margin-top: 0rem;`};
  ${media.mobile`width: 100% `};
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
  ${media.mobile` font-size: 1.6rem`};
  ${media.medium` font-size: 2rem `};
`;
const Text = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  ${media.mobile` font-size: 1.4rem`};
  ${media.medium` font-size: 1.6rem `};
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  color: #6f848f;
  margin-top: 0.8rem;
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
