import React from 'react';
import styled from 'styled-components';
import MessengerIcon from './MessengerIcon';
import EmailIcon from './EmailIcon';

export const Button = styled.div`
   @media only screen and (max-width: 800px) {
      width: auto;
      font-size: 1rem;
      height: 55px;
   }
   box-shadow: 0px 1px 2px rgba(46,41,51,0.08), 0px 2px 4px rgba(71,63,79,0.08);
   width: 160px;
   height: 55px;
   display: flex;
   margin: 10px;
   align-items: center;
   justify-content: space-around;
   font-weight: bold;
   color: #fff;
   text-align: center;
   padding: 12px 16px;
   font-size: .9rem;
   background-color: #FFFFFF;
   border-radius: 5px; 
   cursor: pointer;
   outline: none;
   font-weight: 400;
`;

export const MessageButton = styled(Button)`
   color: #377df6;
`;

const Link = styled.a`
   margin-left: 15px;
`;

export const EmailButton = styled(Button)`
   background-color: #cccccc;
   color: black;
`;

export const ContactMe = () => <>
   <MessageButton
      onClick={() => window.location.href = 'http://m.me/monika.nielsen.14'}
   >
      <MessengerIcon />
      <Link>
         Messenger
      </Link>
   </MessageButton>
   <EmailButton
      onClick={() => window.location.href = 'mailto:monika@yourstylerehabist.com'}
   >
      <EmailIcon />
      <Link>
         Email
      </Link>
   </EmailButton>
</>;