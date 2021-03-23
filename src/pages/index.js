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
        <script>
  (function(w, d, t, s, n) {
    w.FlodeskObject = n;
    var fn = function() {
      (w[n].q = w[n].q || []).push(arguments);
    };
    w[n] = w[n] || fn;
    var f = d.getElementsByTagName(t)[0];
    var e = d.createElement(t);
    var h = '?v=' + new Date().getTime();
    e.async = true;
    e.src = s + h;
    f.parentNode.insertBefore(e, f);
  })(window, document, 'script', 'https://assets.flodesk.com/universal.js', 'fd');
  window.fd('form', {
    formId: '60510560568cfe0ea1997cad'
  });
</script>
    </Helmet>
    <SEO />
    <Slide1 />
    <Slide2 />
    <Slide3 />
    <Slide4 />
    <Slide5 />
  </>;
