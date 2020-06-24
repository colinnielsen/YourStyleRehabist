import React from 'react';
import styled from 'styled-components';
import { PopupText } from 'react-calendly';

const Button = styled.div`
   background: rgb(0, 162, 255);
   color: white !important;
   display: flex;
   align-items: center;
   justify-content: center;
   width: fit-content;
   height: 45px;
   padding: 0 30px;
   border-radius: 25px;
   box-shadow: rgba(0,0,0,0.25) 0 2px 5px;
   font-family: sans-serif;
   text-align: center;
   vertical-align: middle;
   font-weight: bold;
   font-size: 14px;
   cursor: pointer;
`;

export default () =>
   <Button>
      <PopupText
         pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055'
         }}
         text="Schedule Now"
         url="https://calendly.com/monikanielsen/20-minute-consult-call"
      />
   </Button>;