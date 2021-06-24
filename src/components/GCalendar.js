import React from "react"
import styled from 'styled-components';

const GCalendar = () => (
    <div>
        <h1>
            Welcome to the info page
        </h1>

        <div>
        Dates:
            Friday ‌A‌u‌g‌u‌s‌t‌ ‌1‌3‌,‌ ‌2‌0‌2‌1‌ ‌C‌h‌e‌c‌k‌-‌i‌n‌ ‌i‌s‌ ‌4‌:‌0‌0‌ ‌P‌M‌ ‌-‌ ‌8‌:‌0‌0‌ ‌P‌M‌
            Thursday ‌A‌u‌g‌u‌s‌t‌ ‌1‌9‌,‌ ‌2‌0‌2‌1‌ ‌Ch‌e‌c‌k‌o‌u‌t‌ ‌b‌y‌ ‌1‌1‌:‌0‌0‌ ‌A‌M‌
        </div>
        {/* https://support.google.com/calendar/answer/41207?hl=en */}
        <iframe
            src="https://calendar.google.com/calendar/embed?src=f6368e2kcfqibv4udhjn08ck4k%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            style= {{ border: 0 }}
            width="800"
            height="600"
            frameborder="0"
            scrolling="no">
        </iframe>
        {/* Start date button */}
        <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MGQ1NzhoMWJ0cGswN2I2OTk1Nm83dmQyZ28gZjYzNjhlMmtjZnFpYnY0dWRoam4wOGNrNGtAZw&amp;tmsrc=f6368e2kcfqibv4udhjn08ck4k%40group.calendar.google.com">
            <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif">
            </img>
        </a>        {/* End date button */}
        <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NjUxaWN2MGk3cmpqb3Z1azRmNGhjN244MzAgZjYzNjhlMmtjZnFpYnY0dWRoam4wOGNrNGtAZw&amp;tmsrc=f6368e2kcfqibv4udhjn08ck4k%40group.calendar.google.com">
            <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif">
            </img>
        </a>

    </div>
)

export default GCalendar;
