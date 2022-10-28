import './HorizontalCard4.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import { themeColors } from 'styles/theme';

export function HorizontalCard4() {
  return (
    <div className="card_style_horizontal">
      <Container fluid>
        <Row>
          <Col lg={{ span: 4 }} md={{ span: 4 }} xs={24} sm={24}>
            <div className="vertical_flex_center">
              <Image
                src={images.horizontalcardimage4}
                alt="logo"
                className="card_image"
              />
            </div>
          </Col>
          <Col
            lg={{ span: 7, offset: 1 }}
            md={{ span: 7, offset: 1 }}
            xs={24}
            sm={24}
          >
            <div className="vertical_flex horizontal_card-mt">
              <p
                className="home_card_title card_number"
                style={{
                  background: themeColors.blue,
                  color: themeColors.white,
                }}
              >
                04
              </p>
              <p className="home_card_title">
                Take your creativity to the next level.
              </p>
              <p className="home_card_text">
                Express yourself using GIFs. Now create your jams using GIFs!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
