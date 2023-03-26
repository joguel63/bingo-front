import { memo } from "react";
import { Paper, Typography } from "@mui/material";
import { Circle } from "@mui/icons-material";
import { BingoCellType } from "@core/types/bingo-cell";
import { useStyles } from "./styles";

const BingoCellComponent = ({ state, value, isJoker }: BingoCellType): JSX.Element => {
  const { root } = useStyles();
  return (
    <Paper sx={root} className={state}>
      {!isJoker ? (
        <Typography variant="h2" color="initial">
          {value}
        </Typography>
      ) : (
        <Circle fontSize="large" />
      )}
    </Paper>
  );
};

export const BingoCell = memo(BingoCellComponent);
