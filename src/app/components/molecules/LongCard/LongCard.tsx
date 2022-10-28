import './LongCard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
export function LongCard() {
  return (
    <div className="stack-slant__title steps">
      <div className="card_style_long stack-slant__card sticky step-1">
        <Container fluid>
          <Row>
            <Col lg={{ span: 4 }} md={{ span: 4 }} xs={24} sm={24}>
              <div className="vertical_flex_center_long">
                <Image
                  src={images.longcard_image1}
                  alt="logo"
                  className="card_image"
                />
              </div>
            </Col>
            <Col lg={{ span: 7 }} md={{ span: 7 }} xs={24} sm={24}>
              <div className="vertical_flex_card horizontal_card-mt">
                <p className="home_card_title">
                  Why use WeJammin as a producer
                </p>
                <p className="home_card_text">
                  Let the creativity flow and let artists use your beat to
                  create great songs and ideas.<br></br>Which can get you
                  earnings through it.{' '}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="card_style_long1 stack-slant__card sticky step-2">
        <Container fluid>
          <Row>
            <Col lg={{ span: 4 }} md={{ span: 4 }} xs={24} sm={24}>
              <div className="vertical_flex_center_long">
                <Image
                  src={images.longcard_image2}
                  alt="logo"
                  className="card_image"
                />
              </div>
            </Col>
            <Col lg={{ span: 7 }} md={{ span: 7 }} xs={24} sm={24}>
              <div className="vertical_flex_card horizontal_card-mt">
                {/* <p className="home_card_title card_number">01</p> */}
                <p className="home_card_title">Who owns the music?</p>
                <p className="home_card_text">
                  You retain full ownership of your music.<br></br>We take no
                  ownership or publishing from your music creation.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="card_style_long2 stack-slant__card sticky step-3">
        <Container fluid>
          <Row>
            <Col lg={{ span: 4 }} md={{ span: 4 }} xs={24} sm={24}>
              <div className="vertical_flex_center_long">
                <Image
                  src={images.longcard_image3}
                  alt="logo"
                  className="card_image"
                />
              </div>
            </Col>
            <Col lg={{ span: 7 }} md={{ span: 7 }} xs={24} sm={24}>
              <div className="vertical_flex_card horizontal_card-mt">
                {/* <p className="home_card_title card_number">01</p> */}
                <p className="home_card_title">
                  What happens after uploading my music to WeJammin?{' '}
                </p>
                <p className="home_card_text">
                  We create your producer profile.
                  <br></br>Users will know the music is created by you through
                  your profile.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
