import './HomeFifth.css';
import * as SectionDiv from 'app/components/molecules';
const HorizontalCard: any = SectionDiv.HorizontalCard;
const BodyDiv: any = SectionDiv.SectionDiv;
export function HomeFifth() {
  return (
    <BodyDiv className="homeFifth">
      <div className="vertical_flex_center">
        <p className="home_subtitle_fontstyle horizontal_flex">
          <div className="home_text_bar_pink"></div> Features{' '}
          <div className="home_text_bar_left_pink"></div>
        </p>
        <p className="home_title_fontstyle">How it works</p>
        <p className="home_text_fontstyle home_text_center ">
          WeJammin is super easy to use
        </p>
      </div>
      <div className="card_margin vertical_flex_center">
        <div className="stack__title steps">
          <div className="stack__card sticky step-1">
            <HorizontalCard />
          </div>
          <div className="stack__card sticky step-2">
            <SectionDiv.HorizontalCard2 />
          </div>
          <div className="stack__card sticky step-3">
            <SectionDiv.HorizontalCard3 />
          </div>
          <div className="stack__card sticky step-4">
            <SectionDiv.HorizontalCard4 />
          </div>
          <div className="stack__card sticky step-5">
            <SectionDiv.HorizontalCard5 />
          </div>
        </div>
      </div>
    </BodyDiv>
  );
}
