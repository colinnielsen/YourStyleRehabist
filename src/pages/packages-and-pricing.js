import React from 'react';
import '../styles/default.css';
import StyledBackgroundSection from '../components/BackgroundImageScreen2';
import styled from 'styled-components';
import { ContactMe } from '../components/ContactSection';
import Squiggle from '../components/Squiggle';
import Crosses from '../components/Crosses';
import CalendlyButton from '../components/CalendlyButton';

const Container = styled.div`
   width: 100vw;
   display: flex;
   padding: 8vh 0 10vh 0;
   flex-flow: column nowrap;
   align-items: center;
   justify-content: center;
`;

const RatesContainer = styled.div`
   @media only screen and (max-width: 900px) {
      width: 100%;
   }
   width: 80vw;
`;

const RateBoxTitle = styled.div`
   @media only screen and (max-width: 800px) {
      font-size: 2rem;
      padding: .6rem;
   }
   font-family: Inria_italic;
   font-size: 2rem;
   color: #111;
   text-align: left;
   padding: 1rem 1rem 2rem 1rem;
`;

const Stylish = styled.text`
   font-family: PT Script; 
   font-size: 2.2rem;
   line-height: 2.6rem;
   color: #111;
`;

const RateBoxTitle_Intro = styled(RateBoxTitle)`
   @media only screen and (max-width: 1025px) {
      line-height: 4rem;
   }
   font-family: PT Script;
   font-size: 4rem;
   line-height: 2.5rem;
   padding: 0;
   margin-top: 20px;
`;

const RateBox = styled.div`
   @media only screen and (max-width: 800px) {
      align-items: center;
      jusify-content: center;
      padding: 20px 20px 6px 20px;
      margin: .5;
   }
   height: auto;
   margin-top: 2rem;
   width: 90%;
   position: relative;
   display: flex;
   flex-flow: column nowrap;
   padding: 20px 20px 60px 20px;
   align-items: flex-start;
   font-size: 1rem;
   text-align: left;
   line-height: 1.5rem;
   font-family: 'Inria';
   background: linear-gradient(90deg, #F2F2F1 0%, rgba(242, 242, 241, 0.86) 140.78%);
   color: #873954;
   box-shadow: 0px 2px 4px rgba(46,41,51,0.1), 0px 4px 8px rgba(71,63,79,0.08);
   margin: .3rem;
`;

const SplashBoxFirst = styled(RateBox)`
   margin-bottom: .5rem;
   padding: 20px 20px 10px 20px;
   width: calc(100% - .6rem);
`;

const P = styled.p`
   @media only screen and (max-width: 900px) {
      width: 100%;
   }
   padding: 1rem;
   margin-top: .5rem;
   background-color: #f1f3f4;
   width: 80%;
   min-height: 60%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

const Black = styled.p`
   color: #000;
   text-align: right;
   position: relative;
   bottom: 0;
`;

const BlackLeft = styled(Black)`
   margin: 10px 0 20px 7px;
   text-align: left;
`;

const SplashTextContainer = styled.div`
   width: 100%;
   margin-bottom: 1rem;
`;

const Row = styled.div`
   @media only screen and (max-width: 900px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column nowrap;
   }
   display: flex;
   flex-flow: row nowrap;
`;

const SplashBoxRow = styled(Row)`
   width: calc(100% - .6rem);
   align-items: center;
   justify-content: space-around;
   flex-direction: row !important;
`;

const Column = styled.div`
   display: flex;
   flex-direction: column;
`;

const SplashText = styled.div`
   @media only screen and (max-width: 800px) {
      margin: 0;
      padding: 20px;
      font-size: 2.5rem;
   }
   white-space: nowrap;
   width: fit-content;
   margin-top: 30px;
   margin-left: 80px;
   font-family: Inria_italic;
   font-size: 4rem;
   line-height: 72px;
   text-align: center;
   letter-spacing: -0.02em;
   color: #F2F2F2;
   background-color: #c3b9ae;
   padding: 1.5rem;
`;

const SubText = styled.text`
   color: #111;
   font-size: .8rem;
`;

const ContactContainer = styled.div`
   margin-top: 1.3rem;
   box-shadow: 0px 2px 4px rgba(46,41,51,0.1), 0px 4px 8px rgba(71,63,79,0.08);
   display: flex;
   align-items: center;
   flex-flow: column nowrap;
   background: rgba(85, 54, 65, 0.94);
   padding: 2rem 2rem 1rem 2rem;
`;

const ContactText = styled.text`
   margin: .5rem;
   font-family: PT Script;
   color: #f1f3f4;
   font-size: 2rem;
   line-height: 2.6rem;
`;

const Buttons = styled.div`
   margin-top: 1rem;
   display: flex;
   flex-flow: row nowrap;
`;

export default () =>
   <StyledBackgroundSection>
      <Container>
         <SplashTextContainer>
            <SplashText>
               Packages + Pricing.
            </SplashText>
         </SplashTextContainer>
         <RatesContainer>
            <SplashBoxFirst>
               <SplashBoxRow>
                  <Column>
                     <RateBoxTitle_Intro>
                        Introduction! - Let's chat!
                     </RateBoxTitle_Intro>
                     <Squiggle />
                        I’d love to hear your concerns and frustrations. <br /><SubText>I can answer all your questions and we can find the right program for you.</SubText>
                     <br />
                     <CalendlyButton />
                     <BlackLeft>
                        30 Min call- Free
                     </BlackLeft>
                  </Column>
                  <Column>
                     <Crosses />
                  </Column>
               </SplashBoxRow>
            </SplashBoxFirst>
            <Row>
               <RateBox>
                  <RateBoxTitle>
                     I hour -
                        <br /><br /><Stylish>"Your Specific Needs."</Stylish>
                  </RateBoxTitle>
                  <P>
                     One hour focused on your choice of the following: <br />
                     <SubText>
                        - Closet Assessment <br />
                        - Helpful Hints for Closet Organization<br />
                        - Clarifying Wardrobe <br />
                        - Styling Help<br />
                        - Specific Shopping Assistance <br />
                     </SubText>
                     <br />
                     <br />
                     <Black>
                        Flat Rate: $150
                     </Black>
                  </P>
               </RateBox>
               <RateBox>
                  <RateBoxTitle>
                     2 Hour Mini Session -
                        <br /><br /><Stylish>“You Do You."</Stylish>
                  </RateBoxTitle>
                  <P>
                     What do you need most? Pick a Service! <br />
                     <SubText>
                        -Cleanse and Edit your Closet <br />
                        -Clarify or Capsule your Wardrobe <br />
                        -Personal Shopping <br />
                     </SubText>
                     <br />
                     <Black>
                        <SubText>Value $300</SubText> - Package Rate: $275
                     </Black>
                  </P>
               </RateBox>
            </Row>
            <Row>
               <RateBox>
                  <RateBoxTitle>
                     4 Hour Signature Session -
                     <br /><br /><Stylish>“Best Bang for your Buck!”</Stylish>
                  </RateBoxTitle>
                  <P>
                     Combination of your greatest needs …for example: <br />
                     <SubText>
                        -3 Hour Cleanse and Edit <br />
                        -1 Hour Capsule or Shopping Help <br />
                        <br />
                     </SubText>
                     <br />
                     <Black>
                        <SubText>Value $600</SubText> - Package Rate: $499
                  </Black>
                  </P>
               </RateBox>
               <RateBox>
                  <RateBoxTitle>
                     6 Hour Grand Session -
                        <br /><br /><Stylish>“The Whole Kit and Kaboodle!”</Stylish>
                  </RateBoxTitle>
                  <P>
                     2 separate appointments - strongly suggested for bigger closet or deeper needs. <br />
                     <SubText>
                        We can asses how to use your 6 hours, but it will encompass all services. <br />
                        - Closet Cleanse and Edit <br />
                        - Wardrobe Clarify and Capsule <br />
                        - Personal Shopping <br />
                     </SubText>
                     <br />
                     <Black>
                        <SubText>Value $900</SubText> - Package Rate: $719
                  </Black>
                  </P>
               </RateBox>
            </Row>
         </RatesContainer>
         <ContactContainer>
            <ContactText>
               Looking forward to hearing from you!
            </ContactText>
            <Buttons>
               <ContactMe />
            </Buttons>
         </ContactContainer>
      </Container>

   </StyledBackgroundSection>;