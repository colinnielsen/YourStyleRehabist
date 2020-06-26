import React from 'react';
import styled from 'styled-components';
import SplashImage from './Slide5SplashImage';
import useWindowSize from '../hooks/useWidth';
import { ContactMe, Button } from './ContactSection';
import { Link } from 'gatsby';

const Container = styled.section`
   @media only screen and (max-width: 800px) {
      flex-flow: column nowrap;
      padding: 0;
      height: auto;
      background: linear-gradient(89.11deg, #B5A898 -0.52%,
         rgba(181, 168, 152, 0.77) -0.5%,
         rgba(181, 168, 152, 0.51) 174.83%);
   }
   width: 100vw;
   height: 87vh;
   max-width: 100vw;
   display: flex;
   justify-content: space-between;
   background: #F9F8F7;
   flex-flow: row wrap;
   overflow-x: hidden;
`;

const ImageContainer = styled.div`
   @media only screen and (max-width: 800px) {
      width: 100vw;
      left: 0;
      display: flex;
      justify-content: center;
      position: relative;
   }
   width: 55vw;
   position: absolute;
   margin-top: 0vh;
   left: 10vw;
`;

const Gradient = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   z-index: 1;
   background: linear-gradient(89.11deg, #B5A898 -0.52%,
      rgba(181, 168, 152, 0.77) -0.5%,
      rgba(181, 168, 152, 0.51) 174.83%);
`;

const SplashText = styled.div`
   @media only screen and (max-width: 800px) {
      font-size: 3rem;
      margin: 0;
      margin-top: 20px;
      margin-left: -10px;
   }
   color: #FFF;
   margin-left: 20px;
   margin-top: 1rem;
   font-family: Inria_italic;
   font-size: 3rem;
`;

const DescriptorText = styled.div`
   @media only screen and (max-width: 800px) {
      font-size: 1.1rem;
      line-height: 30px;
      padding: 10px;
      margin-top: 15px;
   }
   font-family: Inria;
   font-size: 1rem;
   line-height: 30px;
   color: #FFF;
   padding: 20px;
   margin-top: 35px;
`;

const Text = styled.div`
   @media only screen and (max-width: 800px) {
      width: 90vw;
      position: relative;
      height: auto;
      padding: 6vw 0 6vw 0;
   }
   padding: 1rem;
   height: 700px;
   position: absolute;
   z-index: 2;
`;

const Line = styled.div`
   @media only screen and (max-width: 800px) {
      width: 86vw;
      margin: 0;
      margin-left: 50%;
      transform: translate(-50%,-50%);
   }
   height: 3px;
   width: 60%;
   margin-top: 20px;
   margin-left: 180px;
   border: 3px solid #462631;
`;

const FinalQuote = styled.div`
   @media only screen and (max-width: 800px) {
      font-size: 1.6rem;
      margin: 26px 0 40px 0;
      padding: 0;
   }
   font-family: Inria_italic;
   color: #FFF;
   font-size: 2rem;
   padding: 30px;
   text-align: center;
`;

const ContactContainer = styled.div`
   @media only screen and (max-width: 800px) {
      flex-flow: row nowrap;
      padding: 20px;
      width: 100vw;
      left: 0;
      height: auto;
      position: relative;
      margin: 0;
   }
   position: absolute;
   margin-top: 52vh;
   left: 60vw;
   z-index: 2;
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
   justify-content: center;
   background: #462631;
   width: 350px;
   height: 220px;
`;

const PricingButton = styled(Button)`
   width: 250px !important;
   color: #462631;
   font-family: Inria_italic;
   margin-left: 50%;
   transform: translate(-50%);
`;

const Slide5 = () => {
   const size = useWindowSize();
   return (
      <Container>
         <ImageContainer>
            <Text>
               <SplashText>Imagine...</SplashText>
               <DescriptorText>
                  getting ready quickly, feeling like you have lots of choices, feeling fiercely confident what's clothing that you know fits and you look good in.
                  <br />Now imagine being able to give to others and make a huge difference.<br /> It is the ultimate and Do Good-Look Good!
               </DescriptorText>
               <Line />
               <FinalQuote>
                  Click here for packages and pricing.
               </FinalQuote>
               <Link to={`/packages-and-pricing/`}>
                  <PricingButton>
                     Pricing
                  </PricingButton>
               </Link>
            </Text>
            {size.width > 800 && <>
               <Gradient />
               <SplashImage />
            </>}
         </ImageContainer>
         <ContactContainer>
            <ContactMe />
         </ContactContainer>
      </Container>
   );
}

export default Slide5;