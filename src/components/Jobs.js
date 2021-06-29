import React from "react"
import scriptLoader from "react-async-script-loader";

const Jobs = () => (
    <div>
        <h1> Meet the team</h1>
        <div class="github-card" data-github="lizziepaquette" data-width="400" data-height="" data-theme="default"></div>
        <div class="github-card" data-github="justjack555" data-width="400" data-height="" data-theme="default"></div>
        {/* <div class="github-card" data-github="jenncummings" data-width="400" data-height="150" data-theme="default"></div> */}
        <div class="github-card" data-github="lizziepaquette/temecula-friendcation" data-width="400" data-height="" data-theme="default"></div>
    </div>
);

export default scriptLoader(["//cdn.jsdelivr.net/github-cards/latest/widget.js"]) (Jobs);