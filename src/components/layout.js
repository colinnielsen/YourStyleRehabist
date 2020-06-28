import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../images/favicon.ico';
import Helmet from 'react-helmet';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <>
          <div
            style={{
              padding: '0 1rem',
            }}
          >
            <main>{children}</main>
          </div>
          <Footer siteTitle={data.site.siteMetadata.title} />
        </>
      )}
    />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
