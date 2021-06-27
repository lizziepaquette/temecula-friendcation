import React from "react"
import styled from 'styled-components';
import scriptLoader from "react-async-script-loader";

const PageWrapper = styled.div`
  @media screen and (max-width: 768px) {}
`;

const AirbnbPreviewIframe = styled.iframe`
  width: 450px;
  height: 300px;
  margin: auto;
`;

// https://stackoverflow.com/questions/48726547/how-to-embed-airbnb-html-script-snippet-into-react-js-page-without-jquery
const AirbnbPreview = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  if (isScriptLoaded && isScriptLoadSucceed) {
    window.AirbnbAPI.bootstrap();
  }
  return (
    <div
      class="airbnb-embed-frame"
      data-id="40889879"
      data-view="home"
      style={{ width: '100%', height: 300 }}
    >
      <a href="https://www.airbnb.com/rooms/40889879?check_in=2021-08-13&amp;check_out=2021-08-19&amp;guests=1&amp;adults=1&amp;s=66&amp;unique_share_id=245a1952-1116-4ed8-8348-6aecb8892ab3&amp;source=embed_widget">View On Airbnb</a>
      <a href="https://www.airbnb.com/rooms/40889879?check_in=2021-08-13&amp;check_out=2021-08-19&amp;guests=1&amp;adults=1&amp;s=66&amp;unique_share_id=245a1952-1116-4ed8-8348-6aecb8892ab3&amp;source=embed_widget" rel="nofollow">Stunning Wine Country estate- New Pool/Spa</a>
      <script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script>
    </div>
  );
};

export default scriptLoader(["https://www.airbnb.com/embeddable/airbnb_jssdk"])(
  AirbnbPreview
);