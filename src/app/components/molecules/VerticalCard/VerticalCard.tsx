import './VerticalCard.css';
import Image from 'react-bootstrap/Image';
import { SubmitPopup } from 'app/components/molecules';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
export function VerticalCard({ img, title, text, index }) {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const goto = () => {
    history.push('/submitdetail');
  };
  return (
    <div className="card_style">
      <div className="half-card">
        <Image src={img} alt="logo" style={{ width: '100%' }} />
      </div>
      <div className="half-card">
        <p className="home_card_title">{title}</p>
        <p className="home_card_text">{text}</p>
      </div>
      {index === 4 && (
        <button className="vertical_button" onClick={handleShow}>
          GET STARTED{' '}
        </button>
      )}
      <SubmitPopup show={show} handleClose={handleClose} />
    </div>
  );
}
