import styled from 'styled-components';
import { media } from 'styles/media';
import { themeColors } from 'styles/theme';

export const SectionDiv = styled.div`
  ${media.mobile`padding: 8rem 3.2rem ;`};
  ${media.small`padding: 8rem 3.2rem;`};
  ${media.medium`padding: 8rem 10rem `};
  &.header {
    ${media.mobile`padding: 4rem 3.2rem;`};
    ${media.small`padding: 1rem 9rem 1rem 9rem;`};
    ${media.medium`padding:1rem 9rem 1rem 9rem;`};
  }
  &.homeFirst {
    background: ${themeColors.primary};
    ${media.mobile`padding: 4rem 3.2rem 0rem 3.2rem;`};
    ${media.small`padding: 4rem 20rem 0rem 15rem;`};
  }
  &.homeFourthMobile {
    background: ${themeColors.primary};
    ${media.mobile`padding: 8rem 0rem 4rem 0rem;`};
    ${media.small`padding: 15rem 15rem 8rem 15rem;`};
  }
  &.homeSecond {
    position: relative;
    background: ${themeColors.pink};
    ${media.mobile`padding: 8rem 3.2rem;`};
    ${media.small`padding: 15rem 15rem 0rem 15rem;`};
    ${media.medium`padding: 15rem 24rem 0rem 15rem;`};
  }
  &.homeThird {
    position: relative;
    background: ${themeColors.blue};
    ${media.mobile`padding: 8rem 3.2rem;`};
    ${media.small`padding: 15rem 16rem;`};
    ${media.medium`padding: 15rem 16rem ;`};
  }
  &.homeFifth {
    background: ${themeColors.primary};
    ${media.mobile`padding: 8rem 2.4rem;`};
    ${media.small`padding: 8rem 2.4rem;`};
    ${media.medium`padding: 15rem 32rem ;`};
  }
  &.homeSixth {
    background: ${themeColors.yellow};
    ${media.mobile`padding: 8rem 3.2rem;`};
    ${media.small`padding: 16.8rem 16rem;`};
    ${media.medium`padding: 16.8rem 14rem ;`};
  }
  &.homeaccelrator {
    background: ${themeColors.primary};
    ${media.mobile`padding: 8rem 3.2rem;`};
    ${media.small`padding: 16.8rem 16rem;`};
    ${media.medium`padding: 16.8rem 28rem 16.8rem 14rem ;`};
  }
  &.homeSeventh {
    background: ${themeColors.purple};
    ${media.mobile`padding: 8rem 3.2rem;`};
    ${media.small`padding: 15rem 15rem ;`};
    ${media.medium`padding: 15rem 40rem ;`};
  }
  &.submitDetail {
    background: #f4c95d;
    ${media.mobile`padding: 3.2rem 2.4rem;`};
    ${media.small`padding: 3.2rem 2.4rem;`};
    ${media.medium`padding: 0rem 38rem 15rem 38rem ;`};
  }
  &.login {
    background: #f4c95d;
    ${media.mobile`padding: 8rem 2.4rem;`};
    ${media.small`padding: 8rem 2.4rem;`};
    ${media.medium`padding: 10rem;`};
  }
  &.uploadAudio {
    background: #f4c95d;
    ${media.mobile`padding: 5.6rem 2.4rem;`};
    ${media.small`padding: 5.6rem 2.4rem;`};
    ${media.medium`padding: 0rem 36rem 15rem 36rem ;`};
  }
  &.copyright {
    background: ${themeColors.violet};
    ${media.mobile`padding: 5.6rem 2.4rem;`};
    ${media.small`padding: 5.6rem 2.4rem;`};
    ${media.medium`padding: 0rem 32rem 15rem 32rem ;`};
  }
  &.jamm {
    background: ${themeColors.violet};
    ${media.mobile`padding: 3.2rem 1.6rem 7.2rem 1.6rem;`};
    ${media.small`padding: 0rem 12rem 15rem 12rem;`};
    ${media.medium`padding: 0rem 32rem 15rem 32rem ;`};
  }
  &.beatDetail {
    background: #f4c95d;
    ${media.mobile`padding: 8rem 2.4rem;`};
    ${media.small`padding: 8rem 2.4rem;`};
    ${media.medium`padding: 11.2rem 40rem 9.6rem 40rem ;`};
  }
  &.producerFirst {
    position: relative;
    background: #0d0d0d;
    ${media.mobile`padding: 3.2rem 3.2rem 5.6rem 3.2rem;`};
    ${media.small`padding: 10rem 12rem 15rem 12rem;`};
    ${media.medium`padding: 10rem 15.6rem 15rem 15.6rem;`};
  }
  &.producerSecond {
    position: relative;
    background: #d64568;
    ${media.mobile`padding: 8rem 2.4rem;`};
    ${media.small`padding: 4rem 3.2rem;`};
    ${media.medium`padding: 15rem 24rem ;`};
  }
`;
