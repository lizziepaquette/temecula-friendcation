import React from "react"
import AirbnbPreview from './AirbnbPreview'
import GoogleMaps from './GoogleMaps'
import { GCalendarStart, GCalendarEnd } from './GCalendar'
import YoutubeVid from './YoutubeVid'

const Info = () => (

    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "blue"
        }}>
        <div>
        <table>
             <tr>
              <td>
                <h1>When</h1>
                </td>
            </tr>
            <tr><td> Friday ‌A‌u‌g‌u‌s‌t‌ ‌1‌3‌,‌ ‌2‌0‌2‌1‌ ‌C‌h‌e‌c‌k‌-‌i‌n‌ ‌i‌s‌ ‌4‌:‌0‌0‌ ‌P‌M‌ ‌-‌ ‌8‌:‌0‌0‌ ‌P‌M‌
            </td></tr>
            <tr><td><GCalendarStart/></td></tr>
            <tr><td>Thursday ‌A‌u‌g‌u‌s‌t‌ ‌1‌9‌,‌ ‌2‌0‌2‌1‌ ‌Ch‌e‌c‌k‌o‌u‌t‌ ‌b‌y‌ ‌1‌1‌:‌0‌0‌ ‌A‌M‌
            </td></tr>
            <tr><td><GCalendarEnd/></td></tr>

            <tr>
                <h1>
                    Where
                </h1>
                41480 Valencia Way, Temecula, CA 92592
            </tr>
            <tr>
                <td><YoutubeVid /> </td>
            </tr>
            <tr>
                <td><AirbnbPreview /> </td>
            </tr>
            <tr>
                <td><GoogleMaps google = {"idk"} /> </td>
            </tr>
            </table>
            </div>
    </div>
)

export default Info;