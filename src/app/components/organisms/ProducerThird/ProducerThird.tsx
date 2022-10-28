//import './HomeSixth.css';
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

export function ProducerThird({ goto }) {
  return (
    <BodyDiv className="homeSixth">
      <Container fluid>
        <Row>
          <Col
            lg={{ span: 6 }}
            md={{ span: 6 }}
            xs={24}
            sm={24}
            className="d-none d-md-block"
          >
            <ResDiv className="home_fulltake">
              <Image
                src={images.producer_3}
                alt="logo"
                width="100%"
                height={'100%'}
              />
            </ResDiv>
          </Col>
          <Col
            lg={{ span: 6 }}
            md={{ span: 6 }}
            xs={24}
            sm={24}
            className="d-block d-md-none"
          >
            <div className="home_fulltake">
              <Image
                src={images.producer_3mobile}
                alt="logo"
                width="100%"
                height={'100%'}
              />
            </div>
          </Col>
          <Col lg={{ span: 6 }} md={{ span: 6 }} xs={24} sm={24}>
            <ResDiv2 className="vertical_flex">
              <p className="home_subtitle_fontstyle_black horizontal_flex">
                <div className="home_text_bar_pink"></div> Get started
              </p>
              <p className="home_title_fontstyle_black">
                Put your music on Wejammin’
              </p>
              <p className="home_text_fontstyle_black">
                Every Wejammin’ Producer owns their work, keeps creative control
                and takes home the lion's share of revenue! Submit your Beat
                Now.
              </p>
              <Button
                className="home_button_clone all_margin_top"
                onClick={goto}
              >
                Submit Beat
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
  ${media.small`width: 55rem`};
  ${media.small`height: auto`};
`;
const ResDiv2 = styled.div`
  ${media.mobile`margin-left: auto`};
  ${media.medium`margin-left: 7rem`};
`;