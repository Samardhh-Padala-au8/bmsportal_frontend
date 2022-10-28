import './HomeSecond.css';
import * as SectionDiv from 'app/components/molecules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import { media } from 'styles/media';
import styled from 'styled-components';
const BodyDiv: any = SectionDiv.SectionDiv;
export function HomeSecond() {
  return (
    <BodyDiv className="homeSecond">
      <Container fluid>
        <Row>
          <Col
            lg={{ order: 'first', span: 7 }}
            md={{ order: 'first', span: 7 }}
            sm={{ order: 'last', span: 12 }}
            xs={{ order: 'last', span: 12 }}
          >
            <ResDiv2 className="vertical_flex">
              <p className="home_subtitle_fontstyle horizontal_flex">
                <div className="home_text_bar"></div> EXPLORE
              </p>
              <p className="home_title_fontstyle">
                Explore new ways of creating music
              </p>
              <p className="home_text_fontstyle">
                Today’s generation is creating songs on their phones
              </p>
            </ResDiv2>
          </Col>
          <Col
            lg={{ order: 'first', span: 5, offset: 0 }}
            md={{ order: 'first', span: 5, offset: 0 }}
            sm={0}
            xs={0}
            className="d-none d-md-block"
          >
            <div style={{ width: '40rem', height: '50rem' }}>
              <Image
                src={images.homesecond}
                alt="logo"
                className="homefirst_logostyle"
                width={`100%`}
                height={`100%`}
              />
            </div>
          </Col>
          <Col
            lg={0}
            md={0}
            sm={{ order: 'first', span: 12 }}
            xs={{ order: 'first', span: 12 }}
            className="d-block d-md-none"
          >
            <div>
              <Image
                src={images.homesecondmobile}
                alt="logo"
                className="homefirst_logostyle"
                width="100%"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="homesecond_image_absolute d-none d-md-block">
        <Image src={images.illustration2} alt="logo" />
      </div>
    </BodyDiv>
  );
}

const ResDiv2 = styled.div`
  ${media.mobile`margin-left: auto`};
  ${media.medium`margin-left: 5rem`};
  ${media.large`margin-left:7rem;`}
`;