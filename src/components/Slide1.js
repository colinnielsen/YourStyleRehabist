import React from 'react';
import styled from 'styled-components';
import StyledBackgroundSection from './BackgroundImageSlide1';
import _ProfilePic from './ProfilePic';

const Container = styled.div`
   @media only screen and (max-width: 800px) {
      flex-direction: column;
   }
   width: 100vw;
   display: flex;
   min-height: 75vh;
   align-items: center;
   justify-content: center;
   flex-wrap: nowrap;
   flex-direction: row;
`;

const ProfilePic = styled(_ProfilePic)`
   @media only screen and (max-width: 800px) {
      width: 250px;
      height: 250px;
   }
`;

const ProfileContainer = styled.div`
   @media all and (max-width: 500px) {
      width: 200px;
      height: 200px;
      transform: translate(-7px,13px);
   }
   width: 400px;
   height: 400px;
   background: linear-gradient(108.75deg, #9A9086 14.18%, #AAA39C 206.1%, #FFFFFF 206.12%);
`;

const LandingInfo = styled.div`
   @media only screen and (max-width: 800px) {
      margin: 0px !important;
      width: auto;
   }
   display: block;
   justify-content: center;
   align-items: space-around;
   margin: 8% 8% 8% 10%;
   width: 40%;
`;

const Stylish = styled.text`
   font-family: PT Script; 
   font-size: 3rem;
   line-height: 50px;
   color: #111;
`;

const Name = styled.div`
   @media only screen and (max-width: 800px) {
      display: none;
      visibility: hidden;
      font-size: 0px;
   }
   @media only screen and (max-width: 1200px) {
      font-size: 48px;
   }
   font-family: 'Inria_bold';
   font-size: 68px;
   display: inline-block;
   height: 80px;
   line-height: 60px;
   width: 90vw;
   white-space: nowrap;
   color: #5E2828;
   transform: translate(-5vw);
`;

const SplashBox = styled.div`
   @media only screen and (max-width: 800px) {
      width: 80vw;
      font-size: 2rem;
      text-align: center;
      padding: 0;
      padding: 20px;
      margin: 0;
      float: none;
      line-height: 35px;
      transform: translate(0, 40px);
   }
   margin-left: 100px;
   width: 40vw;
   float: right;
   position: relative;
   display: block;
   padding: 20px 50px 60px 20px;
   align-items: center;
   justify-content: center;
   font-size: 28px;
   font-weight: 300;
   text-align: center;
   line-height: 38px;
   font-family: 'Inria_bold';
   background: linear-gradient(90deg, #F2F2F1 0%, rgba(242, 242, 241, 0.86) 140.78%);
   color: #873954;
`;

const Subheader = styled.div`
   @media only screen and (max-width: 800px) {
      translate: none;
   }
   font-family: Inria_italic;
   transform: translate(10%);
   font-size: 28px;
`;

const P = styled.div`
   @media only screen and (max-width: 800px) {
      font-size: 1rem;
      line-height: 24px;
   }
   font-family: Inria_italic;
   margin-top: 10px;
   margin-bottom: 30px;
   font-size: 22px;
   line-height: 40px;
   text-align: center;
`;

const Line = styled.div`
   height: 3px;
   width: 90%;
   border: 3px solid #82786E;
   margin-left: 50%;
   transform: translate(-50%);
`;

const Slide1 = () =>
   <>
      <StyledBackgroundSection>
         <Container>
            <ProfileContainer>
               <ProfilePic />
            </ProfileContainer>
            <LandingInfo>
               <Name>Your Style Rehabist</Name>
               <SplashBox>
                  <Stylish>
                     I'm Monika Nielsen - <br />
                     Your Style Rehabist.
                  </Stylish>
                  <br />
                  <Subheader>
                  </Subheader>
                  <P>
                     Helping you take your chaos into calm by cleansing, clarifying and capsulating your closet and wardrobe.
                  </P>
                  <Line />
               </SplashBox>
            </LandingInfo>
         </Container>
      </StyledBackgroundSection>
   </>;

export default Slide1;