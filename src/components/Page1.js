import React from 'react';
import styled from 'styled-components';
import StyledBackgroundSection from './BackgroundImage';
import _ProfilePic from './ProfilePic';

const Page1Container = styled.div`
   @media only screen and (max-width: 800px) {
      flex-direction: column;
   }
   height: 100vh;
   width: 100vw;
   display: flex;
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
   @media only screen and (max-width: 800px) {
      width: 250px;
      height: 250px;
      transform: translate(0,20px)
   }
   width: 400px;
   height: 400px;
   background: linear-gradient(108.75deg, #694551 14.18%, #E3C5BD 200.53%);
`;

const LandingInfo = styled.div`
   @media only screen and (max-width: 800px) {
      margin-left: 0px;
      height: auto;
      width: auto;
   }
   display: block;
   justify-content: center;
   align-items: space-around;
   margin-left: 75px;
   width: 700px;
   height: 400px;
`;

const Name = styled.div`
   @media only screen and (max-width: 800px) {
      display: none;
   }
   font-family: 'Inria_bold';
   font-size: 80px;
   height: 80px;
   color: #5E2828;
`;

const SplashBox = styled.div`
   @media only screen and (max-width: 800px) {
      width: 300px;
      font-size: 40px;
      text-align: center;
      padding: 0;
      padding: 20px;
      margin: 0;
      float: none;
      line-height: 62px;
      transform: translate(0,30px)
   }
   margin-left: 100px;
   width: 600px;
   float: right;
   position: relative;
   display: block;
   padding: 20px;
   padding-right: 50px;
   align-items: center;
   justify-content: center;
   font-size: 55px;
   font-weight: 300;
   line-height: 72px;
   font-family: 'Inria_lightItalic';
   background: linear-gradient(90deg, #F2F2F1 0%, rgba(242, 242, 241, 0.86) 140.78%);
   color: #873954;
`;

const Line = styled.div`
   height: 3px;
   width: 200px;
   float: right;
   border: 3px solid #82786E;
`;

const Page1 = () => 
   <>
      <StyledBackgroundSection>
         <Page1Container>
            <ProfileContainer>
               <ProfilePic />
            </ProfileContainer>
            <LandingInfo>
               <Name>Monika Nielsen</Name>
               <SplashBox>
                  Hi, I am your<br/>
                  new style rehabist.
                  <Line />
               </SplashBox>
            </LandingInfo>
         </Page1Container>
      </StyledBackgroundSection>
   </>;

export default Page1;