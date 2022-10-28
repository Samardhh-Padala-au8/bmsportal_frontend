import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import './Header.css';
import { useEffect, useState } from 'react';
import { WavyLink } from 'react-wavy-transitions';

export function CollapsibleSidebar({ onSocial, onredirect }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const elements = document.getElementsByClassName('offcanvas-backdrop');
    for (const ele of elements) {
      ele.addEventListener('click', e => {
        setShow(false);
      });
    }
  }, [show]);

  return (
    <Navbar
      key={'md'}
      bg="header_background"
      collapseOnSelect={true}
      expand={show}
      className="mb-3 side-bar"
    >
      <Container fluid>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-md`}
          onClick={() => setShow(true)}
        >
          <Image src={images.toggle} style={{ marginTop: '1rem' }} alt="logo" />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          show={show}
          id={`offcanvasNavbar-expand-lg}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className="horizontal_flex_between"
              id={`offcanvasNavbarLabel-expand-${'md'}`}
              style={{ padding: '2.4rem' }}
            >
              <Image
                style={{ cursor: 'pointer' }}
                src={images.wejamminmobilelogo}
                alt="logo"
                onClick={() => onredirect('/')}
              />
              <Image
                src={images.toggleclose}
                alt="logo"
                className="header_toggleclose"
                onClick={() => setShow(false)}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ marginTop: '8rem', padding: '0 2.4rem' }}>
            <Nav className="justify-content-end flex-grow-1 pe-3 ">
              <WavyLink
                className="header_mobile_font"
                waveColor="#d64568"
                to="/producers"
              >
                For Producer
              </WavyLink>
              {/* <Nav.Link
                  className="header_mobile_font"
                  onClick={() => onredirect('/submitdetail')}
                >
                  Submit Beat
                </Nav.Link> */}
              <WavyLink
                className="header_mobile_font"
                waveColor="rgb(91, 42, 134)"
                to="/faqs#0"
              >
                Faqs
              </WavyLink>
              <WavyLink
                className="header_mobile_font"
                waveColor="rgb(91, 42, 134)"
                to="/faqs#1"
              >
                Terms and Conditions
              </WavyLink>
              <WavyLink
                className="header_mobile_font"
                waveColor="rgb(91, 42, 134)"
                to="/faqs#2"
              >
                Copyright
              </WavyLink>
              <WavyLink
                className="header_mobile_font"
                waveColor="rgb(91, 42, 134)"
                to="/faqs#3"
              >
                Privacy
              </WavyLink>
              <div className="d-flex justify-content-start header_top">
                <Nav.Link
                  onClick={() => {
                    onSocial('https://www.facebook.com/get.wejammin/');
                  }}
                  className="header_mobile_font"
                >
                  <Image src={images.facebookheadermobile} alt="logo" />
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    onSocial(
                      'https://instagram.com/wejammin.app?igshid=YmMyMTA2M2Y=',
                    );
                  }}
                  className="header_mobile_font header_left"
                >
                  <Image src={images.instagramheadermobile} alt="logo" />
                </Nav.Link>
              </div>
              <Nav.Link
                onClick={() => {
                  onSocial(
                    'https://play.google.com/store/apps/details?id=com.wedigit.wejammin&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
                  );
                }}
                className="header_mobile_font header_top_mobile_logo"
              >
                <Image src={images.googleplaymobile} alt="logo" />
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
