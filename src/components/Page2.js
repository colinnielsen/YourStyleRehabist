import React from 'react';
import styled from 'styled-components';
import SplashImage from './Page2SplashImage';

const Page2Container = styled.section`
   height: 110vh;
   width: 100%;
   transform: translate(-2px);
   display: flex;
   background: rgba(181, 168, 152, 0.08);
   flex-flow: row nowrap;
   overflow: hidden;
`;

const ContentContainer = styled.div`
   position: absolute;
   width: 100%;
   height: 90%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ImageContainer = styled.div`
   z-index: -1;
   transform: translate(10%);
`;

const Gradient = styled.div`
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
   position: absolute;  
   margin: 40px;
   z-index: 2;
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

const SplashColorBox = styled.div`
   background: #C5B9AD;
   z-index: 2;
   width: 500px;
   transform: translate(-10%, 20%);
   height: 650px;
   padding: 50px;
`;

const SplashTextBox = styled.div`
   font-family: Inria;
   font-size: 46px;
   line-height: 55px;
   letter-spacing: -0.05em;
   color: #F9F9F9;
   width: 320px;
`;

const Line = styled.div`
   height: 3px;
   width: 100%;
   border: 2px solid #575757;
   margin-top: 8px;
`;

const ExplainationText = styled.div`
   margin-top: 25px;
   font-family: Inria;
   font-size: 29px;
   line-height: 35px;
   letter-spacing: -0.05em;
   color: #F9F9F9;
`;

const Page2 = () =>
   <Page2Container>
      <ContentContainer>
         <ImageContainer>
         <SplashBox>
            What I <br />do for you -
         </SplashBox>
            <Gradient />
            <SplashImage />
         </ImageContainer>
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
   </Page2Container>



export default Page2;