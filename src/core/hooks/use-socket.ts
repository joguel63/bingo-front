import { useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";

type UseSocketReturnType<T> = {
  socket?: Socket;
  data: T | null;
  setData: (data: T) => void;
};

export function useSocket<T = unknown>(url: string): UseSocketReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const socketRef = useRef<Socket>();

  useEffect(() => {
    socketRef.current = io(url, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd",
      },
      transports: ["websocket"],
    });
    socketRef.current.on("connect", () => {
      console.log("Conectado al servidor de sockets");
    });
    socketRef.current.on("disconnect", () => {
      console.log("Desconectado del servidor de sockets");
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [url]);

  return {
    socket: socketRef.current,
    data,
    setData,
  };
}
