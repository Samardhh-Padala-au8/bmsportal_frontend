import { Header } from 'app/components/organisms';
//import HomeThird from 'app/components/organisms/HomeThird';
import Footer from 'app/components/Footer';
import ProducerFirst from 'app/components/organisms/ProducerFirst';
import ProducerSecond from 'app/components/organisms/ProducerSecond';
import HomeSeventh from 'app/components/organisms/HomeSeven';
import ProducerThird from 'app/components/organisms/ProducerThird';
import { useHistory } from 'react-router-dom';
import { themeColors } from 'styles/theme';
import { SubmitPopup } from 'app/components/molecules';
import { useState } from 'react';

export function Producers() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const goto = () => {
    history.push('/submitdetail');
  };
  return (
    <div style={{ background: themeColors.primary }}>
      <Header />
      <ProducerFirst goto={handleShow} />
      <ProducerSecond />
      <ProducerThird goto={handleShow} />
      <HomeSeventh />
      <Footer />
      <SubmitPopup show={show} handleClose={handleClose} />
    </div>
  );
}
