import './HorizontalCard5.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';

export function HorizontalCard5() {

  const onSocial = () => {
    window.open(
      'https://play.google.com/store/apps/details?id=com.wedigit.wejammin&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    );
  };
  return (
    <div className="card_style_horizontal">
      <Container fluid>
        <Row>
          <Col
            lg={{ span: 4 }}
            md={{ span: 4 }}
            xs={24}
            sm={24}
            className="d-none d-md-block"
          >
            <div className="vertical_flex_center">
              <Image
                src={images.horizontalcardimage5}
                alt="logo"
                className="card_image"
              />
            </div>
          </Col>
          <Col
            lg={{ span: 4 }}
            md={{ span: 4 }}
            xs={24}
            sm={24}
            className="d-block d-md-none"
          >
            <div className="vertical_flex_center">
              <Image
                src={images.horizontalcardimage5mobile}
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
            <div className="vertical_flex horizontal_card-bt">
              <div>
                <Image
                  src={images.cloudcard}
                  alt="logo"
                  className="d-none d-md-block"
                />
              </div>
              <button
                className="card_button_clone homefirst_content_side"
                onClick={onSocial}
              >
                Start Earning NOW{' '}
                <Image
                  src={images.go}
                  alt="logo"
                  className="homefirst_arrowstyle"
                />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
