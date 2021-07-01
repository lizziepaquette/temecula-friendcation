import React from "react"

const YoutubeVid = () => (
    <div>
    <iframe
        style={{ width: '100%', height: '51.25vw', marginRight: '10px'}}
        src="https://www.youtube.com/embed/Kktx2ph4UYc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true">
    </iframe>
    </div>
);

export default YoutubeVid;
