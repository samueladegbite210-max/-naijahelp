/* Optional real-time messaging client for v1.0.
   Include Socket.IO client from your own bundled build in production. */
window.NaijaHelpRealtime = (() => {
  let socket = null;
  function connect(ioClient, handlers = {}) {
    const token = localStorage.getItem("naijahelp_token");
    if (!token || !ioClient) return null;
    socket = ioClient(NaijaHelpAPI.apiBase, { auth: { token }, transports: ["websocket"] });
    socket.on("connect", () => handlers.onConnect?.());
    socket.on("disconnect", () => handlers.onDisconnect?.());
    socket.on("message", message => handlers.onMessage?.(message));
    socket.on("notification", notification => handlers.onNotification?.(notification));
    socket.on("connect_error", error => handlers.onError?.(error));
    return socket;
  }
  function joinRequest(requestId){ socket?.emit("join_request", requestId); }
  function sendMessage(requestId, body){ socket?.emit("send_message", {requestId, body}); }
  function disconnect(){ socket?.disconnect(); socket=null; }
  return {connect, joinRequest, sendMessage, disconnect};
})();
