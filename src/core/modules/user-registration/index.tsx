import { useCallback, useContext, useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { AppContext } from "@core/contexts/app-context";
import { useStyles } from "./styles";
import { useSocket } from "@core/hooks";
import { SOCKET_URLS } from "@core/enums";

export const UserRegistration = (): JSX.Element => {
  const { socket } = useSocket("http://localhost:8000");
  const { dispatch, state } = useContext(AppContext);
  const { root } = useStyles();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch({ type: "ADD_USER_INFO", payload: { name: e.target.value } });
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Submit");
      if (socket) {
        const player = {
          id: new Date().getTime(),
          name: state.userInfo.name,
          table: [],
          bingo: false,
          score: 0,
          lobbyId: "lobby1",
        };

        socket.emit(SOCKET_URLS.JoinLobby, player);
        socket.on(SOCKET_URLS.JoinLobby, (data: any) => {
          console.log(data, "esto llego");
        });
      }
    },
    [state.userInfo]
  );
  return (
    <Paper elevation={3} sx={root}>
      <form onSubmit={handleSubmit} className="form">
        <Typography variant="h6">Juego del Bingo</Typography>
        <TextField
          name="name"
          label="Jugador"
          placeholder="Introduce tu nombre"
          size="small"
          onChange={handleChange}
          required
        />

        <Button variant="contained" color="primary" type="submit">
          Continuar
        </Button>
      </form>
    </Paper>
  );
};
