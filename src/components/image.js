import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "background1.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />;
