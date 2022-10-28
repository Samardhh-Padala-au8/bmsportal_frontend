import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import images from 'utils/constants/images';
import styled from 'styled-components';
export function SubmitPopup({ show, handleClose }) {
  return (
    <>
      <StyledModal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Heading>Coming Soon</Heading>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VerticalDiv
            style={{
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
              padding: '3.2rem',
            }}
          >
            <Image src={images.popup} alt="logo" />
            <div
              style={{
                marginTop: '4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Heading>Coming soon!</Heading>
              <BodyFont>
                We are working hard on it and the Submit Music feature will be
                live soon. We promise, it’ll be worth the wait!
              </BodyFont>
            </div>
          </VerticalDiv>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1.6rem',
            }}
          >
            <button
              className="home_button homefirst_content_side"
              onClick={handleClose}
            >
              Go back to the website
            </button>
          </div>
        </Modal.Footer>
      </StyledModal>
    </>
  );
}

const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 1.6rem;
  }
  .modal-backdrop {
    background-color: red;
  }
`;

const Heading = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  color: #2b353f;
`;
const VerticalDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const BodyFont = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #6f848f;
  text-align: center;
  margin-top: 0.8rem;
`;
