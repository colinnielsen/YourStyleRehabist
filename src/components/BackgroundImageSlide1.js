import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
   <StaticQuery
      query={graphql`
      query {
         desktop: file(relativePath: { eq: "background1.jpeg" }) {
            childImageSharp {
               fluid(quality: 90, maxWidth: 1920) {
               ...GatsbyImageSharpFluid_withWebp
               }
            }
         }
         }
      `}
      render={data => {
         const imageStack = [
            `linear-gradient(112.09deg, rgba(181, 168, 152, 0.2) 2.32%, rgba(181, 168, 152, 0) 123.03%)`,
            data.desktop.childImageSharp.fluid,
         ];
         return (
            <BackgroundImage
               Tag='section'
               className={className}
               fluid={imageStack}
            >
               {children}
            </BackgroundImage>
         )
      }}
   />
);

const StyledBackgroundSection = styled(BackgroundSection)`
   @media only screen and (max-width: 800px) {
      padding: 15vw 0 30vw 0;
   }
   width: 100%;
   &::before,
   &::after {
      filter: blur(10px);
      background-position: bottom center;
      background-repeat: repeat-y;
      background-size: cover;
   }
`;

export default StyledBackgroundSection;