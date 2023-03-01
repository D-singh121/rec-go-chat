import React from 'react';
import "./Chatinput.scss";

const ChatInput = (props) => {
    return (
        <div className="ChatInput">
            <input placeholder='Write messsage here..' onKeyDown={props.send} />
        </div>
    )
}

export default ChatInput            