import { Box, ThemeProvider } from "@mui/material";
import { Navbar } from "@core/components";
import { UserRegistration, BingoBucket } from "@core/modules";
import { AppContextProvider } from "@core/contexts/app-context-provider";
import { BingoCellType, BingoColumnType } from "@core/types";
import theme from "@core/theme";

function App() {
  const cellsB: BingoCellType[] = [
    {
      value: 1,
      state: "initial",
      isJoker: false,
    },
    {
      value: 2,
      state: "initial",
      isJoker: false,
    },
    {
      value: 3,
      state: "initial",
      isJoker: false,
    },
    {
      value: 4,
      state: "initial",
      isJoker: false,
    },
    {
      value: 5,
      state: "initial",
      isJoker: false,
    },
  ];
  const cellsI: BingoCellType[] = [
    {
      value: 6,
      state: "initial",
      isJoker: false,
    },
    {
      value: 7,
      state: "initial",
      isJoker: false,
    },
    {
      value: 8,
      state: "initial",
      isJoker: false,
    },
    {
      value: 9,
      state: "initial",
      isJoker: false,
    },
    {
      value: 10,
      state: "initial",
      isJoker: false,
    },
  ];
  const cellsN: BingoCellType[] = [
    {
      value: 11,
      state: "initial",
      isJoker: false,
    },
    {
      value: 12,
      state: "initial",
      isJoker: false,
    },
    {
      value: 13,
      state: "initial",
      isJoker: true,
    },
    {
      value: 14,
      state: "initial",
      isJoker: false,
    },
    {
      value: 15,
      state: "initial",
      isJoker: false,
    },
  ];
  const cellsG: BingoCellType[] = [
    {
      value: 16,
      state: "initial",
      isJoker: false,
    },
    {
      value: 17,
      state: "initial",
      isJoker: false,
    },
    {
      value: 18,
      state: "initial",
      isJoker: false,
    },
    {
      value: 19,
      state: "initial",
      isJoker: false,
    },
    {
      value: 20,
      state: "initial",
      isJoker: false,
    },
  ];
  const cellsO: BingoCellType[] = [
    {
      value: 21,
      state: "initial",
      isJoker: false,
    },
    {
      value: 22,
      state: "initial",
      isJoker: false,
    },
    {
      value: 23,
      state: "initial",
      isJoker: false,
    },
    {
      value: 24,
      state: "initial",
      isJoker: false,
    },
    {
      value: 25,
      state: "initial",
      isJoker: false,
    },
  ];

  const collumns: BingoColumnType[] = [
    { letter: "B", cells: cellsB },
    { letter: "I", cells: cellsI },
    { letter: "N", cells: cellsN },
    { letter: "G", cells: cellsG },
    { letter: "O", cells: cellsO },
  ];
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box marginTop="64px">
          <UserRegistration />
          <div style={{ marginTop: 50 }} />
          <BingoBucket columns={collumns} />
        </Box>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
