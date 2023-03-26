import { SxStyles } from "@core/types";

type StylesKeys = "root";
export const useStyles = (): SxStyles<StylesKeys> => {
  return {
    root: {
      "& .form": { display: "flex", flexDirection: "column", gap: "16px" },

      width: "300px",
      margin: "0 auto",
      padding: "16px",
      alignItems: "center",
    },
  };
};
