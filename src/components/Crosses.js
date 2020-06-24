import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ImageTransform = styled.div`
   @media only screen and (max-width: 500px) {
      display: none;
      visibility: hidden;
   }
`;
export default () => 
   <StaticQuery
      query={
         graphql`
            query {
               file(relativePath: { eq: "crosses.png" }) {
                  childImageSharp {
                     fixed(width: 200, height: 200) {
                        ...GatsbyImageSharpFixed_noBase64
                     }
                  }
               }
            }
         `
      }
      render={data =>
         <ImageTransform>
            <Img fixed={data.file.childImageSharp.fixed} />
         </ImageTransform>
      }
   />;