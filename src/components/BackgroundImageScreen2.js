import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
   <StaticQuery
      query={graphql`
      query {
         desktop: file(relativePath: { eq: "background2.jpg" }) {
            childImageSharp {
               fluid(quality: 90, maxWidth: 1920) {
               ...GatsbyImageSharpFluid_withWebp_noBase64
               }
            }
         }
         }
      `}
      render={data => {
         const imageStack = [
            // `linear-gradient(112.09deg, rgba(181, 168, 152, 0.2) 2.32%, rgba(181, 168, 152, 0) 123.03%)`,
            `linear-gradient(91.73deg, rgba(205, 195, 185, 0.88) -1.02%,rgba(70, 38, 49, 0.77) -1%, rgba(71, 39, 50, 0.38) 103.57%)`,
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
`;

export default StyledBackgroundSection;