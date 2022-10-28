import './ProducerSecond.css';
import * as SectionDiv from 'app/components/molecules';
const LongCard: any = SectionDiv.LongCard;
const BodyDiv: any = SectionDiv.SectionDiv;
export function ProducerSecond() {
  return (
    <BodyDiv className="producerSecond">
      <div className="vertical_flex_center">
        <p className="home_subtitle_fontstyle horizontal_flex">
          <div className="home_text_bar"></div>
          JOIN THE COMMUNITY
          <div className="home_text_bar_left"></div>
        </p>
        <p className="producer_title_fontstyle">Get ready to be heard</p>
        <p className="producer_text_fontstyle">
          Upload your original Beat to WeJammin{' '}
        </p>
      </div>
      <div className="card_margin_producer vertical_flex_center">
        <LongCard></LongCard>
      </div>
    </BodyDiv>
  );
}
