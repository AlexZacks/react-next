import React from 'react'


export default class extends React.Component {
    static async getInitialProps() {
        const res = await fetch('https://www.webull.com/quote/fx-usdrub');
        let m = await res.text();
        return {m}
    }

    render() {
        let ss = this.props.m
        let s = "Real-time Quotes | Provided by Refinitiv"
        ss = ss.substring(ss.lastIndexOf(s) + s.length)
        ss = ss.substring(0, 160)
        ss = ss.substring(100, ss.lastIndexOf("</div>"))
        ss = ss.substring(ss.lastIndexOf(">") + 1)
        return (
            <div>
                <h1>{ss}</h1>
                <br/>
            </div>)

    }
}
