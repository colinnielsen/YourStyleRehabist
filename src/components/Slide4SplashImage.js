import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default () => 
   <StaticQuery
      query={
         graphql`
            query {
               file(relativePath: { eq: "splash2.jpg" }) {
                  childImageSharp {
                     fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                     }
                  }
               }
            }
         `
      }
      render={data =>
         <Img fluid={data.file.childImageSharp.fluid} className='hideIfMobile' />
      }
   />;