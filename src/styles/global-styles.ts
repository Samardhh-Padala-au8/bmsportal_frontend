import { createGlobalStyle } from 'styled-components';
import images from 'utils/constants/images';
import { media } from './media';
import { themeColors } from './theme';

export const GlobalStyle = createGlobalStyle`
 html,
  body {
    height: 100%;
    width: 100%;
    font-family: Lato, Arial, sans-serif;
    ${media.mobile`font-size: 62.5%`};
    ${media.small`font-size: 50%`};
    ${media.medium`font-size: 60.0%`};   
    ${media.large`font-size: 60.0%`};
    ${media.xlarge`font-size: 62.5%`};
    ${media.xxlarge`font-size: 90%`};
    ${media.xxxlarge`font-size: 110%`};
  }

  .nav-item-tabs {
    --bs-nav-pills-link-active-bg: transparent;
    --bs-nav-link-padding-y: 1rem;
    --bs-nav-link-hover-color: ${themeColors.hoverGrey};
    :hover {
      background: ${themeColors.hoverGrey};
      border-radius: 0.8rem;
    } 
    .nav-link.active {
      filter: invert(37%) sepia(86%) saturate(653%) hue-rotate(301deg) brightness(88%) contrast(93%);
    }
  }

  .nav-tabs {
   
    overflow-x: auto;
    overflow-y:hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
    --bs-nav-link-padding-x: 1rem;
    --bs-nav-tabs-border-width: 0px;
    --bs-nav-link-padding-y: 0px;
  }
  .nav-item-mobile-tabs {
    padding: 0;
    .nav-link.active {
      span {
        padding-bottom: 1.2rem;
       
        color: ${themeColors.red};
        border-bottom: 0.2rem solid ${themeColors.red};
      }
    }
  }
  .offcanvas {
    box-shadow: 0px px 0px rgb(0 0 0 / 20%);
  }

  .homeFourth {
    position: relative;
    ${media.mobile`height: 220vh;`};
    ${media.small`height: 350vh;`};
    ${media.medium`height: 350vh;`};   
    background: ${themeColors.primary};
  }

  .cards {
    display: flex;
    ${media.mobile`margin-left: 100vw;`};
    ${media.small`margin-left: 45vw;`};
    ${media.medium`margin-left: 45vw;`};   
    align-items: center;
  }
  .btn-reset {
    padding: 0;
    border: 0;
    outline: 0;
    background: none;
  }
  
  .container {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    margin: 0 auto;
  }
  
  .app-title {
    position: absolute;
    text-align: center;
    color: #ccc;
    font-size: 40px;
    left: 0;
    right: 0;
    top: -135px;
  }
  
  .player {
    position: relative;
    margin: 0 auto;
    height: 64px;
    display: block;
    box-shadow: 0 0 30px rgba(0,0,0,.1);
  
    .wave-canvas {
      position: absolute;
    }
  }
  
  .player-landing {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ddd;
    font-size: 24px;
  }
  .dragger2 {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0.8rem;
    cursor: col-resize;
    background: #999;
    border-radius: 0 0.5rem 0.5rem 0;
    &::after {
      content: '';
      position: absolute;
      left: -2px;
      right: -2px;
      top: 0;
      bottom: 0;
    }
  }
  .dragger3 {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0.8rem;
    cursor: col-resize;
    background: #999;
    border-radius: 0.5rem 0 0 0.5rem;
    &::after {
      content: '';
      position: absolute;
      left: -2px;
      right: -2px;
      top: 0;
      bottom: 0;
    }
  }
  .dragger {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0.1rem;
    background: #D64568;
    cursor: col-resize;
  
    &::after {
      content: '';
      position: absolute;
      left: -2px;
      right: -2px;
      top: 0;
      bottom: 0;
    }
  
    &:hover {
      background: #333;
    }
  }
  
  .drag-current {
    background: ##D64568;
  }
  
  .landing {
    padding-bottom: 100px;
  
    h2 {
      padding: 0;
      margin: 0;
      text-align: center;
      color: #ccc;
      font-size: 40px;
      margin-bottom: 40px;
    }
  }
  
  .controllers {
    margin:0.8rem 0;
    display: flex;  
    .seconds {
      font-size: 1.2rem;
      line-height: 2.4rem;
      display: inline-block;
      overflow: hidden;
      color: #aaa;
    }
  }
  
  .file {
    input {
      visibility: hidden;
      position: absolute;
    }
  }
  
  .file-main {
    display: block;
    margin: 0 auto;
    padding: 40px;
    text-align: center;
    cursor: pointer;
    color: #999;
    transition: 0.3s;
    background: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  
    .icon {
      margin: -1px 5px 0;
      font-size: 24px;
    }
  
    &:hover {
      color: #6ac;
      border-color: #6ac;
    }
  }
  
  .icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: middle;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0);
    }
  
    to {
      transform: rotate(360deg);
    }
  }
  
  .icon.__icon-spin {
    animation: spin infinite 1s linear;
  }
  
  .ctrl-item {
    &:extend(.btn-reset);
  
    display: inline-block;
    font-size: 16px;
    text-align: center;
    color: #999;
    padding: 10px;
    margin-right: 10px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    cursor: pointer;
  
    &:hover {
      box-shadow: 0 0 20px rgba(0,0,0,0.16);
    }
  
    .icon {
      display: block;
    }
  }
  
  .dropdown {
    display: inline-block;
    position: relative;
  
    .list-wrap {
      position: relative;
    }
  
    .list {
      position: absolute;
      width: 60px;
      top: 0;
      left: 0;
      visibility: hidden;
      opacity: 0;
      transition-duration: .3s;
      transition-property: opacity, visibility;
      list-style: none;
      background: #fff;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
      padding: 0;
      margin: 0;
      z-index: 10;
  
      button {
        &:extend(.btn-reset);
  
        display: block;
        width: 100%;
        text-align: center;
        padding: 5px 0;
        color: inherit;
        font-size: 12px;
        cursor: pointer;
  
        &:hover {
          background: #333;
          color: #fff;
        }
      }
    }
  
    &:hover .list {
      opacity: 1;
      visibility: visible;
    }
  }
  
  .clipper {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .cursor-current {
    @cursorColor: #D64568;
  
    position: absolute;
    font-size: 12px;
    top: -10px;
    padding: 1px 3px;
    text-align: center;
    color: #fff;
    transform: translate(-50%) scale(0.8);
    background: @cursorColor;
  
    .num {
      font-family: monospace;
    }
  
    &::after {
      content: '';
      position: absolute;
      border: 5px solid transparent;
      border-top-color: #D64568;
      bottom: -9px;
      left: 50%;
      margin-left: -5px;
    }
  }

  .form-check-input{
    width:1.8rem;
    height:1.8rem;
    border: 0.2rem solid #6F848F !important;
    border-radius: 0.3rem !important;
    background: #F3F5F8;
  }
  label{
    margin-left:1.1rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #1C262C !important;
  }
  .form-check-input:checked[type=checkbox]{
    background-repeat: no-repeat;
  }
  .form-check-input:focused[type=checkbox]{
    outline:none !important 
  }
  .btn-check:active+.btn:focus, .btn-check:checked+.btn:focus, .btn.active:focus, .btn.show:focus, .btn:active:focus{
    box-shadow:none;
  }
  input{
    border:none !important;
  }
  .form-control{
    border:none !important;
  }
  .form-check-input:checked{
    background-color:#28A745;
  }
  .multiSelectContainer li{
    &:hover{
      background:#F3F5F8;
    }
  }
  input[type="range"] {
    -webkit-appearance: none;
    margin-right: 1.5rem;
    width: 100%;
    height: 0.7rem;
    background:  #E7E7E7;
    border-radius: 0.5rem;
    background-image: linear-gradient(#D64568, #D64568);
    background-size: 0% 100%;
    background-repeat: no-repeat;
    margin-top:0.8rem;
  }
  
  /* Input Thumb */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #D64568;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;
  }
  
  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #D64568;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;
  }
  
  input[type="range"]::-ms-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background:  #E7E7E7;
    cursor: pointer;
    box-shadow: 0 0 2px 0  #E7E7E7;
    transition: background .3s ease-in-out;
  }
  
  input[type="range"]::-webkit-slider-thumb:hover {
    background: #D64568;
  }
  
  input[type="range"]::-moz-range-thumb:hover {
    background: #D64568;
  }
  
  input[type="range"]::-ms-thumb:hover {
    background: #D64568;
  }
  
  /* Input Track */
  input[type=range]::-webkit-slider-runnable-track  {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  
  input[type=range]::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  
  input[type="range"]::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  

  .offcanvas {
    ${media.mobile`--bs-offcanvas-width: 100%;`};
    ${media.small`--bs-offcanvas-width: 40%;`};
  }


  .side-bar {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
    padding: 2.4rem;
    ${media.mobile`display: none`};
    ${media.small`display: block`};
  }

  .image-width {
    ${media.mobile`width: auto`};
    ${media.small`width: auto`};
    ${media.medium`width: 50rem`};
  }
  .fp5nm8g {
    background-color: transparent !important;
    background-image: url(${images.snapchat}) !important;
    background-position: 0 0 !important;
    background-repeat: no-repeat;
    background-size: auto !important;
    border-radius: 0px !important ;
    border-style: none;
    display: block;
    font-family: inherit;
    height: 4rem !important;
    margin: 0 auto;
    outline: none;
    width:7rem !important;
    &:hover{
      box-shadow:none !important;
    }
  }
  .fe90oc4{
    background-color: transparent !important;
    background-image: url(${images.snapchat}) !important;
    background-position: 0 0 !important;
    background-repeat: no-repeat;
    background-size: auto !important;
    border-radius: 0px !important ;
    border-style: none;
    display: block;
    font-family: inherit;
    height: 4rem !important;
    margin: 0 auto;
    outline: none;
    width: 7rem !important;
    &:hover{
      box-shadow:none !important;
    }
  }
  .f8ario5 {
    font-size: 0 !important;
      font-weight: 0 !important;
      padding-left: 0 !important;
  }
  .carousel-control-next, .carousel-control-prev{
    display:none;
  }
  .carousel-indicators{
    bottom:-10%;
  }
  .carousel-indicators [data-bs-target]{
    height:0.8rem;
    width:0.8rem;
    border-radius:50%;
  }
  @media only screen and (max-width: 700px ){
    .controllers{
      margin: 1.6rem 0;
    }
  }

  .stack__card.sticky.step-1 {
    ${media.mobile`bottom: 0.5em`};
    ${media.small`bottom: 2.5em`};
    ${media.medium`bottom: 1.5em`};
    z-index: 10;
    margin-bottom: 0.4em;
  }
  .stack__card.sticky.step-2 {
    ${media.mobile`bottom: 0.5em`};
    ${media.small`bottom: 2.5em`};
    ${media.medium`bottom: 1.5em`};
    z-index: 8;
    margin-bottom: 0.4em;
  }
  .stack__card.sticky.step-3 {
    ${media.mobile`bottom: 0.5em`};
    ${media.small`bottom: 2.5em`};
    ${media.medium`bottom: 1.5em`};
    z-index: 6;
    margin-bottom: 0.4em;
  }
  .stack__card.sticky.step-4 {
    ${media.mobile`bottom: 0.5em`};
    ${media.small`bottom: 2.5em`};
    ${media.medium`bottom: 1.5em`};
    z-index: 4;
    margin-bottom: 0.4em;
  }
  .stack__card.sticky.step-5 {
    ${media.mobile`bottom: 0.5em`};
    ${media.small`bottom: 2.5em`};
    ${media.medium`bottom: 1.5em`};
    z-index: 2;
    margin-bottom: 0.4em;
  }

  .stack-slant__card.sticky.step-1 {
    ${media.mobile`bottom: 0.5em`};
    ${media.small`bottom: 2.5em`};
    ${media.medium`bottom: 1.5em`};
    z-index: 10;
    margin-bottom: 0.8em;
  }
  .stack-slant__card.sticky.step-2 {
    ${media.mobile`bottom: 0.5em`};
    ${media.small`bottom: 2.5em`};
    ${media.medium`bottom: 1.5em`};    
    z-index: 8;
    margin-bottom: 0.8em;
  }
  .stack-slant__card.sticky.step-3 {
    ${media.mobile`bottom: 0.5em`};
    ${media.small`bottom: 2.5em`};
    ${media.medium`bottom: 1.5em`};    
    z-index: 6;
    margin-bottom: 0.8em;
  }
  .form-control:focus{
    box-shadow: none;
  }
  .form-control{
    font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 2.4rem;
      color: ${themeColors.black};
    ::placeholder{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 2.4rem;
      color: #6F848F;
    }
   
  }
  .react-multi-carousel-dot-list{
    position:absolute;
    bottom:-10% !important;
  }
 .react-multi-carousel-list {
  ${media.mobile`padding-left: 0rem`};
  ${media.small`padding-left: 1.5rem`};
 }
 .modal{
  ${media.mobile`top: 10%`};
  ${media.small`top: 20%`};
  ${media.medium`top: 5%`};
  ${media.large`top:6%`};
  ${media.xlarge`top:15%`};
 }
 img {
  border-radius: inherit;
}

 .react-wavy-link--active, .react-wavy-link {
  background: transparent;
  border: none;
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x)
}
`;
