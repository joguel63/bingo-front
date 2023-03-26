import { Paper } from "@mui/material";
import { BingoColumnType } from "@core/types";
import { BingoColumn } from "@core/components";

type BingoBucketType = {
  columns: BingoColumnType[];
};
export const BingoBucket = ({ columns }: BingoBucketType): JSX.Element => {
  return (
    <Paper elevation={3} sx={{ display: "inline-block", margin: "0 auto" }}>
      {columns.map((column, index) => (
        <BingoColumn {...column} key={index} />
      ))}
    </Paper>
  );
};
