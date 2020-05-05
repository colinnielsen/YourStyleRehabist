import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const SplashImage = () => (
   <StaticQuery
      query={
         graphql`
         query {
            file(relativePath: { eq: "background2.jpg" }) {
               childImageSharp {
                  fixed(width: 1000, height: 700) {
                     ...GatsbyImageSharpFixed
                  }
               }
            }
         }
      `}
      render={data =>
         <Img fixed={data.file.childImageSharp.fixed} />
      }
   />
);

export default SplashImage;