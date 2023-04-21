import io from "socket.io-client";

const socket = io("https://online-chat-server-eisw.onrender.com", {
  transports: ["websocket"],
  autoConnect: true,
});

export default socket;
