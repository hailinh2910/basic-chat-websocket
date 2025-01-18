import { Client } from "@stomp/stompjs";

// Define global object if it doesn't exist
if (typeof global === 'undefined') {
    window.global = window;
}

const connectWebSocket = (onMessageReceived) => {
    const client = new Client({
        brokerURL: "ws://localhost:8081/identity/ws", // Kết nối WebSocket
        connectHeaders: {},
        debug: function (str) {
            console.log(str);
        },
        reconnectDelay: 5000,
        onConnect: () => {
            console.log("Connected to WebSocket");
            client.subscribe("/topic/greetings", (message) => {
                try {
                    const parsedMessage = JSON.parse(message.body);
                    onMessageReceived(parsedMessage);
                } catch (e) {
                 //   console.error("Failed to parse message as JSON:", e);
                    onMessageReceived(message.body); // Xử lý như một chuỗi thông thường
                }
            });
        },
        onDisconnect: () => {
            console.log("Disconnected");
        },
    });

    client.activate(); // bat dau qua trinh ket noi voi server websocket ta
};

export default connectWebSocket;