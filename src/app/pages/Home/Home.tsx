import {
  Header,
  HomeAccelrator,
  HomeFifth,
  HomeFirst,
  HomeFourthMobile,
  HomeSecond,
} from 'app/components/organisms';
import HomeSeventh from 'app/components/organisms/HomeSeven';
import HomeSixth from 'app/components/organisms/HomeSixth';
import HomeThird from 'app/components/organisms/HomeThird';
import Footer from 'app/components/Footer';
import { themeColors } from 'styles/theme';
import { useHistory } from 'react-router-dom';
import { SubmitPopup } from 'app/components/molecules';
import { useState } from 'react';
export function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();
  const goto = () => {
    history.push('/submitdetail');
  };
  const onSocial = () => {
    window.open(
      'https://play.google.com/store/apps/details?id=com.wedigit.wejammin&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    );
  };

  return (
    <div style={{ background: themeColors.primary }}>
      <Header />
      <HomeFirst goto={onSocial} />
      <HomeSecond />
      <HomeThird />
      <HomeFourthMobile />
      <HomeFifth />
      <HomeSixth goto={handleShow} />
      <HomeAccelrator />
      <HomeSeventh />
      <Footer />
      <SubmitPopup show={show} handleClose={handleClose} />
    </div>
  );
}
