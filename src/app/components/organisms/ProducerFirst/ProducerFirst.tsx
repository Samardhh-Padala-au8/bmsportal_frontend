import './ProducerFirst.css';
import * as SectionDiv from 'app/components/molecules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
const BodyDiv: any = SectionDiv.SectionDiv;
export function ProducerFirst({ goto }) {
  return (
    <BodyDiv className="producerFirst">
      <Container fluid>
        <Row>
          <Col lg={{ span: 7 }} md={{ span: 7 }} xs={24} sm={24}>
            <div className="vertical_flex">
              {/* <p className="home_subtitle_fontstyle horizontal_flex">
                <div className="home_text_bar"></div> EXPLORE
              </p> */}
              <p className="home_title_fontstyle smalld">
                Get your music heard and used by thousands of artists on
                WeJammin’
              </p>
              <p className="home_title_fontstyle larged">
                Get your music heard and used by thousands of artists
              </p>
              <button
                className="home_button_clone homefirst_content_side"
                onClick={goto}
              >
                Submit Beat{' '}
                <Image
                  src={images.go}
                  alt="logo"
                  className="homefirst_arrowstyle"
                />
              </button>
            </div>
          </Col>
          <Col
            lg={{ span: 5 }}
            md={{ span: 5 }}
            xs={24}
            sm={24}
            className="larged"
          >
            <div>
              <Image
                src={images.producer_first}
                alt="logo"
                className="homefirst_logostyle"
                width="100%"
              />
            </div>
          </Col>
          <Col
            lg={{ span: 6, offset: 1 }}
            md={{ span: 6, offset: 1 }}
            xs={24}
            sm={24}
            className="smalld"
          >
            <div style={{ marginTop: '3.2rem' }}>
              <Image
                src={images.producer_first}
                alt="logo"
                className="homefirst_logostyle"
                width="100%"
              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className="homesecond_image_absolute">
        <Image src={images.illustration2} alt="logo" />
      </div> */}
    </BodyDiv>
  );
}
