import { SectionDiv } from 'app/components/molecules';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import images from 'utils/constants/images';
import Image from 'react-bootstrap/Image';
import './Header.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { themeColors } from 'styles/theme';
import styled from 'styled-components';
import { CollapsibleSidebar } from './CollapsibleSidebar';
import { WavyLink } from 'react-wavy-transitions';

export function Header({
  backgroundColor = themeColors.primary,
  color = themeColors.headerfont,
  hovercolor = themeColors.secondary,
  bc = true,
  bgimage = '',
}) {
  const [show, setShow] = useState(false);
  const [selectstate, setSelectState] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleOffcanvas = () => {
    setShow(!show);
  };
  const history = useHistory();
  const onSocial = route => {
    window.open(route);
  };
  const onredirect = route => {
    setShow(false);
    history.push(route);
  };
  const onredirectdesktop = route => {
    setShow(false);
    history.push(route);
  };
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('producers')) {
      setSelectState('producers');
    } else if (path.includes('submitdetail')) {
      setSelectState('submit');
    } else if (path.includes('faq')) {
      setSelectState('faqs');
    } else {
      setSelectState('');
    }
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // Current scroll position
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 90) setShowSidebar(true);
      else setShowSidebar(false);
    });
  }, []);

  return (
    <SectionDiv
      className="header"
      style={
        bc
          ? { background: backgroundColor }
          : {
              backgroundImage: `url(${bgimage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height:'100vh',
            }
      }
    >
      {showSidebar ? (
        <CollapsibleSidebar onSocial={onSocial} onredirect={onredirect} />
      ) : (
        <></>
      )}
      <Navbar
        id="header-bar"
        collapseOnSelect
        expand="md"
        bg="header_background"
        variant="dark"
      >
        <>
          <WavyLink
            className="d-md-block d-sm-none"
            waveColor="#d64568"
            to="/home"
          >
            <Navbar.Brand>
              {' '}
              <Image
                src={
                  color === themeColors.black
                    ? images.wejamminpink
                    : images.wejamminlogo
                }
                style={{ cursor: 'pointer' }}
                alt="logo"
                onClick={() => history.push('/')}
              />
            </Navbar.Brand>
          </WavyLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <Image src={images.toggle} alt="logo" onClick={toggleOffcanvas} />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'md'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
            placement="end"
            show={show}
            className="header_offcanvas_body"
            style={{ padding: '2.4rem 0' }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="horizontal_flex_between"
                id={`offcanvasNavbarLabel-expand-${'md'}`}
                style={{ padding: '2.4rem' }}
              >
                <Image
                  src={images.wejamminmobilelogo}
                  alt="logo"
                  onClick={() => history.push('/')}
                />
                <Image
                  src={images.toggleclose}
                  alt="logo"
                  className="header_toggleclose"
                  onClick={toggleOffcanvas}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
              className="d-none d-md-block"
              style={{ width: '100%' }}
            >
              <Nav
                className="justify-content-end flex-grow-1 "
                style={{ width: '100%' }}
              >
                <WavyLink
                  className="d-md-block d-sm-none"
                  waveColor="#d64568"
                  to="/producers"
                >
                  <HeaderColor
                    color={color}
                    hovercolor={hovercolor}
                    style={
                      selectstate === 'producers'
                        ? { color: hovercolor }
                        : { color: color }
                    }
                  >
                    For Producer
                  </HeaderColor>
                </WavyLink>
                <WavyLink
                  className="d-md-block d-sm-none"
                  waveColor="rgb(244, 201, 93)"
                  to="/submitdetail"
                >
                  <HeaderColor
                    color={color}
                    hovercolor={hovercolor}
                    style={
                      selectstate === 'submit'
                        ? { color: hovercolor, fontWeight: 700 }
                        : { color: color, fontWeight: 500 }
                    }
                  >
                    submit beat
                  </HeaderColor>
                </WavyLink>
                <WavyLink
                  className="d-md-block d-sm-none"
                  waveColor="rgb(91, 42, 134)"
                  to="/faqs#0"
                >
                  <HeaderColor
                    color={color}
                    hovercolor={hovercolor}
                    style={
                      selectstate === 'faqs'
                        ? { color: hovercolor, fontWeight: 700 }
                        : { color: color, fontWeight: 500 }
                    }
                  >
                    faqs
                  </HeaderColor>
                </WavyLink>
                <Nav.Link
                  className="d-md-block d-sm-none"
                  onClick={() => {
                    onSocial(
                      'https://play.google.com/store/apps/details?id=com.wedigit.wejammin&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
                    );
                  }}
                >
                  <HeaderButton
                    color={
                      color === themeColors.black ? themeColors.pink : color
                    }
                    hovercolor={
                      hovercolor === themeColors.black
                        ? themeColors.pink
                        : hovercolor
                    }
                  >
                    Download app
                  </HeaderButton>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
            <Offcanvas.Body
              className="d-sm-block d-md-none"
              style={{ marginTop: '5rem', padding: '0 2.4rem' }}
            >
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <WavyLink
                  className="header_mobile_font"
                  waveColor="#d64568"
                  to="/producers"
                >
                  For Producer
                </WavyLink>
                <WavyLink
                  className="header_mobile_font"
                  waveColor="rgb(244, 201, 93)"
                  to="/submitdetail"
                >
                  Submit Beat
                </WavyLink>
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
        </>
      </Navbar>
    </SectionDiv>
  );
}

const HeaderColor = styled.div<{ color; hovercolor }>`
  font-weight: 500;
  font-family: Montserrat;
  font-size: 1.2rem;
  color: ${p => p.color};
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 2.4rem;
  &:hover {
    color: ${p => p.hovercolor} !important;
    font-weight: ${p =>
      p.color === themeColors.secondary || p.color === themeColors.black
        ? 700
        : 500} !important;
  }
`;

const HeaderButton = styled.div<{ color; hovercolor }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 1.6rem !important;
  border: 0.1rem solid ${p => p.color};
  border-radius: 10.4rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${p => p.color};
  margin-left: 2.4rem;
  gap: 0.8rem;
  &:hover {
    color: ${p => p.hovercolor};
    border: 0.1rem solid ${p => p.hovercolor};
  }
  &:focus {
    color: ${p => p.hovercolor};
    border: 0.1rem solid ${p => p.hovercolor};
  }
`;
