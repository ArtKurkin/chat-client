import io from "socket.io-client";

const socket = io("https://chat-server-teal.vercel.app", {
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
