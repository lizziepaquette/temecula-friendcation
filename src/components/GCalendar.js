import React from "react"

const GCalendar = () => (
    <div style={{ display: 'inline-block', marginLeft: '15px' }}>
        {/* https://support.google.com/calendar/answer/41207?hl=en */}
        <iframe
            src="https://calendar.google.com/calendar/embed?src=f6368e2kcfqibv4udhjn08ck4k%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            style= {{ border: 0 }}
            width="800"
            height="600"
            frameborder="0"
            scrolling="no">
        </iframe>

        <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MGQ1NzhoMWJ0cGswN2I2OTk1Nm83dmQyZ28gZjYzNjhlMmtjZnFpYnY0dWRoam4wOGNrNGtAZw&amp;tmsrc=f6368e2kcfqibv4udhjn08ck4k%40group.calendar.google.com">
            <img
                width="100%"
                height="100%"
                border="0"
                src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"
            >
            </img>
        </a>
    </div>
);

export default GCalendar;
