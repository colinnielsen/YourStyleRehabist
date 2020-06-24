import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default () => 
   <StaticQuery
      query={
         graphql`
            query {
               file(relativePath: { eq: "squiggle.png" }) {
                  childImageSharp {
                     fixed(width: 150, height: 20) {
                        ...GatsbyImageSharpFixed_noBase64
                     }
                  }
               }
            }
         `
      }
      render={data =>
         <Img fixed={data.file.childImageSharp.fixed} />
      }
   />;