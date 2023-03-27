import { AppBar, Toolbar, Typography } from "@mui/material";

export const Navbar = (): JSX.Element => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          Bingo Comunicaciones 1
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
