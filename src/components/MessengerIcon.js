import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default () => 
   <StaticQuery
      query={
         graphql`
         query {
            file(relativePath: { eq: "icon.png" }) {
               childImageSharp {
                  fixed(width: 25, height: 25) {
                     ...GatsbyImageSharpFixed
                  }
               }
            }
         }
      `}
      render={data =>
         <Img fixed={data.file.childImageSharp.fixed} />
      }
   />;