import React, { useEffect , useState} from "react";
import "./App.css";
import { connect, sendMsg } from "./api/index";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/Chatinput/ChatInput";


const App = () => {

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory((prevHistory) => [...prevHistory, msg]);
    });
  }, []);

  const send = (event) => {
    if(event.keyCode === 13) {
    sendMsg(event.target.value);
    event.target.value = "";
  }
  };

  return (
    <div className="App">
      <Header/>
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
      <button className="btn"  onKeyDown={send}>Hit</button>
    </div>
  );

}
export default App;