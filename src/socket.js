import io from "socket.io-client";

const socket = io("https://online-chat-server-eisw.onrender.com", {
  transports: ["websocket"],
});

const tryReconnect = () => {
  setTimeout(() => {
    socket.io.open((err) => {
      if (err) {
        tryReconnect();
      }
    });
  }, 2000);
};

socket.io.on("close", tryReconnect);

export default socket;
