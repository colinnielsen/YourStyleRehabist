import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default () =>
   <StaticQuery
      query={
         graphql`
         query {
            file(relativePath: { eq: "splash1.jpg" }) {
               childImageSharp {
                  fixed(width: 400, height: 600) {
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
