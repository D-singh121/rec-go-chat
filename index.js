var socket = new WebSocket("ws://localhost:8080/ws");

//-----after chathistory creation we pass a callback parameter "cb"
let connect = (cb) => {
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Successfully Connected");
    }

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg)// callback for history messages . 
    };

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
}



let sendMsg = msg =>{
    console.log("sending messages ", msg);
    socket.send(msg);
};

export {connect ,sendMsg};