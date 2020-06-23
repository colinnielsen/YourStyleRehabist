import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ImageTransform = styled.div`
   @media only screen and (max-width: 800px) {
      transform: translate(7px,7px);
   }
   transform: translate(30px, 30px);
`;

export default () =>
   <StaticQuery
      query={
         graphql`
            query {
               file(relativePath: { eq: "mom.jpg" }) {
                  childImageSharp {
                     fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_noBase64
                     }
                  }
               }
            }
         `
      }
      
      render={data =>
         <ImageTransform>
            <Img fluid={data.file.childImageSharp.fluid} />
         </ImageTransform>
      }
   />;