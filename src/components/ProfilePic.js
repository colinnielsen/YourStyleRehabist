import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ImageTransform = styled.div`
   transform: translate(-30px, -30px)
`;

export default () =>
   <StaticQuery
      query={
         graphql`
            query {
               file(relativePath: { eq: "mom.jpg" }) {
                  imageSharp {
                     fluid(maxWidth: 400, quality: 90) {
                        ...GatsbyImageSharpFluid
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