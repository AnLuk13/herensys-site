import React from 'react';

function MetaHead() {
  return (
    <head>
      {/* <script async src="" /> */}
      {/* add googletagmanager */}
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      /> */}
      {/* Preload Google Fonts for Better LCP */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </head>
  );
}

export default MetaHead;
