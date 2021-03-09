import React from 'react';
import styled from 'styled-components';
import SpashImage from './Slide4SplashImage';

const Container = styled.section`
   @media only screen and (max-width: 800px) {
      flex-flow: column nowrap;
      padding: 0;
   }
   width: 100vw;
   min-width: 100vw;
   max-width: 100vw;
   display: flex;
   justify-content: space-between;
   background: #F9F8F7;
   flex-flow: row wrap;
   overflow: hidden;
   padding: 10%;
`;

const ReviewContainer = styled.div`
   @media only screen and (max-width: 800px) {
      width: 90% !important;
      padding: 15px;
      margin-top: 0;
      margin-left: 50%;
      transform: translate(-50%,0);
   }
   @media only screen and (max-width: 1650px) {
      width: 450px;
   }
   width: 600px;
   font-family: Inria;
   font-size: 1rem;
   margin: 30px;
   margin-top: 80px;
`;

const FirstReviewContainer = styled(ReviewContainer)`
   @media only screen and (max-width: 800px) {
      margin-top: 15vh;
   }
`;

const PlaceholderReviewContainer = styled(ReviewContainer)`
   @media only screen and (max-width: 800px) {
      display: none;
   }
`;

const Gradient = styled.div`
   @media only screen and (max-width: 800px) {
      width: 0;
      display: none;
   }
   position: absolute;
   width: 100%;
   height: 100%;
   z-index: 1;
   background: linear-gradient(89.39deg, rgba(181, 168, 152, 0.82) -0.52%, 
      rgba(181, 168, 152, 0.6314) -0.5%,
      rgba(181, 168, 152, 0.4182) 174.83%);
`;

const SplashText = styled.div`
   @media only screen and (max-width: 800px) {
      transform: none;
      margin-top: -8vh;
      font-size: 28px;
      width: 80vw;
      margin-left: 50%;
      transform: translate(-50%,0);
      padding: 20px;
      line-height: 35px;
      left: 0;
      right: inherit;
   }
   position: absolute;
   font-family: Inria_bold;
   font-size: 42px;
   right: 0;
   line-height: 61px;
   text-align: center;
   letter-spacing: -0.02em;
   color: #F2F2F2;
   background-color: #462631;
   padding: 1.5rem;
   z-index: 10;
   transform: translate(60px, -60px);
`;

const ImageAndText = styled.div`
   @media only screen and (max-width: 800px) {
      right: 0;
      left: 0;
      width: auto;
      position: absolute;
   }
   width: 600px;
   height: fit-content;
   position: relative;
   margin: 30px 0 0 30px;
`;

const QuoteEnd = styled.div`
   font-family: Inria_lightItalic;
   font-size: 22px;
   float: right;
   margin-top: 20px;
`;

const Row = styled.div`
   @media only screen and (max-width: 800px) {
      flex-flow: column wrap;
   }
   display: flex;
   flex-flow: row nowrap;
`;

const Slide4 = () =>
   <>
      <Container>
         <Row>
            <FirstReviewContainer>
               "Monika Nielsen is my style rehabist! I was feeling overwhelmed and hating everything in my sea of closet clutter. She brought me a coffee and sat me on my bed while she pulled things out of my closet.
               She wasn't pushy or insistent that I get rid of any of my cherished items just encouraged me to make good decisions on the pieces I loved. The best part is she donates my old pieces to great causes like Dress for Success so I know that I am helping women in need with clothes that were just sitting in my closets!
               Do yourselves a favor ladies give her a call just to chat and find out how she can help you from being a 'closet-stander' like I was!"
               <QuoteEnd>Janet - Littleton, CO</QuoteEnd>
            </FirstReviewContainer>
            {/* <PlaceholderReviewContainer /> */}
            <ImageAndText>
               <SplashText>
                  What people<br />are saying...
            </SplashText>
               <Gradient />
               <SpashImage />
            </ImageAndText>
         </Row>
         <Row>
            <ReviewContainer>
               "She helped me when I was on the fence about purging a blouse or jeans I hadn't worn in a year or two but, you know the age old question,
               'what if I need it?' hahaha She was the voice of reason and so patient.  I LOVE my closet!
               Its so organized and I know with 100% certainty that whatever I grab in the morning, it will fit and I will feel fabulous.
               Monika has an incredible gift and her fashion eye is on point! You will not be disappointed in investing in her services!"
               <QuoteEnd>Carrie - Castle Rock</QuoteEnd>
            </ReviewContainer>
            <ReviewContainer>
               “Monika Nielsen is PHENOMENAL! I have worked with other stylists and organizers in the past and never felt the level of empowerment, confidence and pure happy as I have having worked with Monika."
               <QuoteEnd>Alex - Denver, CO</QuoteEnd>
            </ReviewContainer>
         </Row>
      </Container>
   </>;

export default Slide4;