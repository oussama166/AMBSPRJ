import React from "react";

const MapComponent = () => {
  return (
    <div className="mapouter">
      <div className="w-full h-full overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=Rue%20Essanaoubar%20Casablanca%2020320&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          style={{ width: "100%", height: "800px" }}
        ></iframe>
        <style>
          {`
            .mapouter {
              position: relative;
              height: 800px;
              width: 100%;
              background: #fff;
            }
            .maprouter a {
              color: #fff !important;
              position: absolute !important;
              top: 0 !important;
              z-index: 0 !important;
            }
            .gmap_canvas {
              overflow: hidden;
              height: 800px;
              width: 1000px;
            }
            .gmap_canvas iframe {
              position: relative;
              z-index: 2;
            }
          `}
        </style>
        <a href="https://blooketjoin.org">blooket join</a>
        <style>
          {`
            
            .gmap_canvas iframe {
              position: relative;
              z-index: 2;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default MapComponent;
