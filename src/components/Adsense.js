import React from "react";
import Script from "next/script";

const AdSense = () => {
  return (
    <Script 
    async
    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6087364343233964`}
    crossOrigin='anonymous'
    strategy='afterInteractive'
    />
  );
};

export default AdSense;