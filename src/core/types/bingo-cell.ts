export type BingoCellType = {
  value: string | number;
  state: "initial" | "marked" | "winner";
  isJoker?: boolean;
};
