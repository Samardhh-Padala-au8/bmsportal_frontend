import './HomeSixth.css';
import * as SectionDiv from 'app/components/molecules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import { media } from 'styles/media';
import styled from 'styled-components';
const BodyDiv: any = SectionDiv.SectionDiv;

export function HomeSixth({ goto }) {
  return (
    <BodyDiv className="homeSixth">
      <Container fluid>
        <Row>
          <Col
            lg={{ span: 3 }}
            md={{ span: 3 }}
            xs={{ span: 12 }}
            sm={{ span: 12 }}
          >
            <ResDiv className="home_fulltake">
              <Image
                src={images.homesixth}
                alt="logo"
                width="100%"
                height={'100%'}
              />
            </ResDiv>
          </Col>
          <Col
            lg={{ span: 7, offset: 2 }}
            md={{ span: 7, offset: 2 }}
            xs={{ span: 12 }}
            sm={{ span: 12 }}
          >
            <ResDiv2 className="vertical_flex">
              <p className="home_subtitle_fontstyle_black horizontal_flex">
                <div className="home_text_bar_pink"></div> Become a producer
              </p>
              <p className="home_title_fontstyle_black">
                Get your music heard and used by thousands of artists on
                WeJammin’
              </p>
              <p className="home_text_fontstyle_black">
                Get the earnings started from your music right away. Just upload
                and we do the rest.
              </p>
              <Button
                className="home_button_clone all_margin_top"
                onClick={goto}
              >
                Get Started
              </Button>
            </ResDiv2>
          </Col>
        </Row>
      </Container>
    </BodyDiv>
  );
}

const ResDiv = styled.div`
  ${media.mobile`width: auto`};
  ${media.mobile`height: auto`};
  ${media.small`width: 53rem`};
  ${media.small`height: auto`};
`;
const ResDiv2 = styled.div`
  ${media.mobile`margin-left: auto`};
  ${media.medium`margin-left: 12rem`};
`;