import React from 'react';
import styled from 'styled-components';
import SplashImage from './Page2SplashImage';
import StyledBackgroundSection from './BackgroundImageScreen2';
import useWindowSize from '../hooks/useWidth';

const Page2Container = styled.section`
   @media only screen and (max-width: 800px) {
      transform: none;
      flex-flow: column wrap;
      height: auto;
      overflow: auto;
   }
   height: 105vh;
   width: 100vw;
   transform: translate(-20px);
   display: flex;
   background: rgba(181, 168, 152, 0.08);
   flex-flow: row nowrap;
   overflow: hidden;
`;

const ContentContainer = styled.div`
   @media only screen and (max-width: 800px) {
      transform: none;
      flex-flow: column wrap;
      height: auto;
      position: inherit;
   }
   position: absolute;
   width: 100%;
   height: 90%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ImageContainer = styled.div`
   @media only screen and (max-width: 800px) {
      transform: translate(0,-5vh);
      z-index: 2;
      display: flex;
      align-items: top;
      justify-content: center;
      width: 100%;
   }
   z-index: -1;
   transform: translate(10%);
`;

const Gradient = styled.div`
   @media only screen and (max-width: 800px) {
      width: 100%;
   }
   z-index: 1;
   position: absolute;
   width: 1000px;
   height: 700px;
   background: 
      linear-gradient(91.73deg, rgba(205, 195, 185, 0.88) -1.02%,
      rgba(70, 38, 49, 0.77) -1%,
      rgba(71, 39, 50, 0.38) 103.57%);
`;

const SplashBox = styled.div`
   @media only screen and (max-width: 800px) {
      width: 325px;
      height: 80px;
      font-style: normal;
      font-size: 36px;
      line-height: 30px;
      margin: 20px;
      left: -10px;
      margin-top: 3vh;
   }
   position: absolute;  
   margin: 40px;
   margin-left: 8vw;
   z-index: 4;
   height: 250px;
   width: 400px;
   background: #DBD1C7;
   color: #462631;
   font-family: Inria_bold;
   font-style: normal;
   font-size: 64px;
   line-height: 77px;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   letter-spacing: -0.02em;
`;

const MobileSplashBox = styled(SplashBox)`
   top: 0;

`;

const SplashColorBox = styled.div`
   @media only screen and (max-width: 800px) {
      transform: none;
      width: 85%;
      position: inherit;
      padding: 15px;
      height: auto;
      margin: 20vh 0 20vh 0;
   }
   background: #C5B9AD;
   z-index: 2;
   width: 500px;
   transform: translate(-10%, 20%);
   height: 650px;
   padding: 50px;
`;

const SplashTextBox = styled.div`
   @media only screen and (max-width: 800px) {
      font-size: 1.8rem;
      line-height: 35px;
   }
   font-family: Inria;
   font-size: 34px;
   line-height: 2.2rem;
   letter-spacing: -0.05em;
   color: #F9F9F9;
   width: 320px;
`;

const Line = styled.div`
   @media only screen and (max-width: 800px) {
      margin: .2rem;
   }
   height: 3px;
   width: 75%;
   border: 2px solid #575757;
   margin-top: 8px;
`;

const ExplainationText = styled.div`
   @media only screen and (max-width: 800px) {
      margin: 0;
      font-size: 1.2rem;
      line-height: 1.5rem;
      margin-top: 20px;
   }
   margin-top: 25px;
   font-family: Inria_italic;
   font-size: 1.3rem;
   padding: .5rem 2rem 2rem 1.5rem;
   line-height: 2rem;
   letter-spacing: -0.05em;
   color: #F9F9F9;
`;

const Page2 = () => {
   const size = useWindowSize();
   console.log(size.width);
   
   const Container = () => 
      <Page2Container>
         <ContentContainer>
            {size.width > 800
               ? <ImageContainer>
                  <SplashBox>
                     What I do for you -
                  </SplashBox>
                  <Gradient />
                  <SplashImage />
               </ImageContainer>
               : <MobileSplashBox>
                  What I do for you -
               </MobileSplashBox>
            }
            <SplashColorBox>
               <SplashTextBox>
                  “You should be<br /> able to get ready<br /> in 10 minutes...”
               <Line />
               </SplashTextBox>
               <ExplainationText>
                  ...feeling amazing with clothing that you know fits you well and you look good in. Walking out the door feeling confident and fierce, ready to walk into any room- command that meeting, show up at the party, close the deal, make the new friend.
               </ExplainationText>
            </SplashColorBox>
         </ContentContainer>
      </Page2Container>;

   return (
      <>
         {size.width < 800
            ? <StyledBackgroundSection>
                  <Container />
               </StyledBackgroundSection>
            : <Container />
         }
      </>
   );
}

export default Page2;