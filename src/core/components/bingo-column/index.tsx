import { BingoCellType } from "@core/types/bingo-cell";
import { Box, Typography } from "@mui/material";
import { BingoCell } from "../bingo-cell";

type BingoCellProps = {
  letter: string;
  cells: BingoCellType[];
};

export const BingoColumn = ({ letter, cells }: BingoCellProps): JSX.Element => {
  return (
    <Box display="inline-flex" flexDirection="column">
      <Typography
        variant="h2"
        textAlign="center"
        sx={{ backgroundColor: "info.dark", color: "white" }}
      >
        {letter}
      </Typography>
      {cells.map((cell, index) => (
        <BingoCell {...cell} key={index} />
      ))}
    </Box>
  );
};
