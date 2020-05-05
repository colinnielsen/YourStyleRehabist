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
               childImageSharp {
                  fixed(width: 400, height: 400) {
                     ...GatsbyImageSharpFixed
                  }
               }
            }
         }
      `}
      render={data => 
         <ImageTransform>
            <Img fixed={data.file.childImageSharp.fixed} />
         </ImageTransform>
      }
   />;