import React from 'react';
const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        style={{ fontWeight: "100", fontFamily: "Emojione, Noto, Twemoji, Symbola"}}
    >
        {props.symbol}
    </span>
);
export default Emoji;