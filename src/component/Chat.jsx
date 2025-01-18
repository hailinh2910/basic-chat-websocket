import React, { useEffect, useState } from "react";
import connectWebSocket from "../socket/websocket";
import { Client } from "@stomp/stompjs";
import { Link } from "react-router-dom";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    connectWebSocket((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const sendMessage = () => {
    const client = new Client({
      brokerURL: "ws://localhost:8081/identity/ws",
      connectHeaders: {},
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("publish");
        client.publish({
          destination: "/app/hello",
          body: JSON.stringify(input),
        });
        setInput("");
      },
      onDisconnect: () => {
        console.log("Disconnected");
      },
    });

    client.activate();
  };

  return (
    <div>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <h1>Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
