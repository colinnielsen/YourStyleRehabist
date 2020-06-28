import React from 'react';
import SEO from '../components/seo';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';
import Slide1 from '../components/Slide1';
import Slide2 from '../components/Slide2';
import Slide3 from '../components/Slide3';
import Slide4 from '../components/Slide4';
import Slide5 from '../components/Slide5';
import "../styles/default.css"

export default () =>
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <SEO />
    <Slide1 />
    <Slide2 />
    <Slide3 />
    <Slide4 />
    <Slide5 />
  </>;
