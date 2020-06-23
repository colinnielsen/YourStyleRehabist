import React from 'react';
import "../styles/default.css"
import StyledBackgroundSection from '../components/BackgroundImageScreen2';
import styled from 'styled-components';

const Container = styled.div`
   width: 100vw;
   display: flex;
   flex-flow: column nowrap;
   align-items: center;
   justify-content: center;
`;

const SplashBoxTitle = styled.div`
   font-family: Inria_italic;
   font-size: 2rem;
   color: #111;
   border-bottom: 1px solid darkgrey;
   padding: 1rem;
   text-align: left;
`;

const SplashBox = styled.div`
   @media only screen and (max-width: 800px) {
      width: 80vw;
      font-size: 2rem;
      text-align: center;
      padding: 0;
      height: auto;
      padding: 20px;
      margin: 0;
      float: none;
      line-height: 45px;
      transform: translate(0, 40px);
   }
   height: auto;
   margin-left: 100px;
   width: 80vw;
   float: right;
   position: relative;
   display: block;
   padding: 20px 50px 60px 20px;
   align-items: center;
   justify-content: center;
   font-size: 1rem;
   font-weight: 300;
   text-align: center;
   line-height: 1.5rem;
   font-family: 'Inria';
   background: linear-gradient(90deg, #F2F2F1 0%, rgba(242, 242, 241, 0.86) 140.78%);
   color: #873954;
   box-shadow: 0px 1px 2px rgba(46,41,51,0.08), 0px 2px 4px rgba(71,63,79,0.08);
   margin: 1rem;
`;

export default () => 
   <StyledBackgroundSection>
      <Container>
         <SplashBox>
            <SplashBoxTitle>
               hello1
            </SplashBoxTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni distinctio illo quae ullam expedita provident placeat nam atque! Laudantium ab impedit eum officia adipisci ea totam id quam tempora.
         </SplashBox>
         <SplashBox>
            <SplashBoxTitle>
               hello2
            </SplashBoxTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni distinctio illo quae ullam expedita provident placeat nam atque! Laudantium ab impedit eum officia adipisci ea totam id quam tempora.
         </SplashBox>
         <SplashBox>
            <SplashBoxTitle>
               hello3
            </SplashBoxTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni distinctio illo quae ullam expedita provident placeat nam atque! Laudantium ab impedit eum officia adipisci ea totam id quam tempora.
         </SplashBox>
      </Container>
   </StyledBackgroundSection>;