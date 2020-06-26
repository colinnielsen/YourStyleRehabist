import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default () =>
   <StaticQuery
      query={
         graphql`
            query {
               file(relativePath: { eq: "splash3.jpg" }) {
                  childImageSharp {
                     fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                     }
                  }
               }
            }
         `
      }
      render={data =>
            <Img
               fluid={data.file.childImageSharp.fluid}
            />
      }
   />;