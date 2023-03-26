import { useSocket } from "@core/hooks";
import { initialState, appStateReducer } from "@core/reducers";
import { ReactNode, useMemo, useReducer, useState } from "react";
import { AppContext } from "./app-context";

/* const url = "http://localhost:8000";
interface Message {
  text: string;
  sender: string;
} */

const sessionId =
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
export const AppContextProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);
  /*   const { socket, data: message, setData: setMessage } = useSocket<Message[]>(url);
  const [messageText, setMessageText] = useState(""); */

  /*   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (socket) {
      socket.emit("mensaje", { text: messageText, sender: sessionId });
      socket.on("mensaje", (data: Message[]) => {
        console.log(data, "esto llego");

        setMessage(data);
        setMessageText("");
      });
    }
  }; */

  const AppValues = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return (
    <AppContext.Provider value={AppValues}>
      {/* <div>
        <h1>Chat</h1>
        <ul>
          {message &&
            message.map((message) => (
              <li>
                {message.sender === sessionId ? "Me" : "Other"}: {message.text}
              </li>
            ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={messageText}
            onChange={(event) => setMessageText(event.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div> */}

      {children}
    </AppContext.Provider>
  );
};
