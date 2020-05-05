import React from 'react';
import styled from 'styled-components';
import Page5SpashImage from './Page5SplashImage';

const Page5Container = styled.section`
   height: 100vh;
   width: 100%;
   display: flex;
   justify-content: space-between;
   background: #F9F8F7;
   flex-flow: row wrap;
   overflow: hidden;
   padding: 10%;
`;

const ImageContainer = styled.div``;

const Gradient = styled.div`
   width: 1000px;
   height: 700px;
   position: absolute;
   z-index: 1;
   background: linear-gradient(89.11deg, #B5A898 -0.52%,
      rgba(181, 168, 152, 0.77) -0.5%,
      rgba(181, 168, 152, 0.51) 174.83%);
`;

const SplashText = styled.div`
   color: #FFF;
   margin-left: 20px;
   margin-top: 80px;
   font-family: Inria_italic;
   font-size: 70px;
`;

const DescriptorText = styled.div`
   font-family: Inria;
   font-size: 31px;
   line-height: 40px;
   color: #FFF;
   padding: 20px;
   margin-top: 35px;
`;

const Text = styled.div`
   padding: 30px;
   width: 1000px;
   height: 700px;
   position: absolute;
   z-index: 2;
`;

const Line = styled.div`
   height: 3px;
   width: 600px;
   margin-top: 20px;
   margin-left: 180px;
   border: 3px solid #462631;
`;

const FinalQuote = styled.div`
   font-family: Inria;
   color: #FFF;
   font-size: 36px;
   padding: 30px;
   margin-top: 60px;
   text-align: center;
`;

const ContactContainer = styled.div`
   background: #462631;
   width: 400px;
   height: 300px;
`;

const MessageButton = styled.div`
   display: inline-block;
   font-size: 20px;
   font-weight: bold;
   color: #fff;
   text-align: center;
   padding: 12px 16px;
   margin: 0;
   background-color: #0084ff;
   border: 0;
   border-radius: 5px; 
   cursor: pointer;
   outline: none;
`
   // a:hover.fb-msg-btn { 
   // background-color: #0268c7; 
   // }

const Page5 = () => 
   <Page5Container>
      <ImageContainer>
            <Text>
               <SplashText>Imagine...</SplashText>
               <DescriptorText>
                  getting ready quickly, feeling like you have lots of choices, feeling fiercely confident what's clothing that you know fits and you look good in. Now imagine being able to give to others and make a huge difference.<br /><br /> It is the ultimate and Do Good-Look Good!
               </DescriptorText>
               <Line />
               <FinalQuote>
                  I work in 2 hour increments, based on your needs.
               </FinalQuote>
            </Text>
         <Gradient />
         <Page5SpashImage />
      </ImageContainer>
      <ContactContainer>
         <MessageButton>
            Messenge me
         </MessageButton>
      </ContactContainer>
   </Page5Container>;

export default Page5;