import React from 'react';
import styled from 'styled-components';


const StyledDivClip = styled.svg`
   @media only screen and (max-width: 800px) {
      display: none;
      visibility: hidden;
   }
   margin-top: 7%;
   position: absolute;
`;

const DivClip = () =>
   <StyledDivClip  viewBox="0 0 1440 230" transform="scale(-2,-2)">
      <path fill="#F9F9F9" fill-opacity="1" d="M0,224L80,208C160,192,320,160,480,160C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
   </StyledDivClip>;

export default DivClip;