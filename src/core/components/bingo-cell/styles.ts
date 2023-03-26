import { useTheme } from "@mui/material";
import { SxStyles } from "@core/types";

export const useStyles = (): SxStyles<"root" | "icon"> => {
  const { palette } = useTheme();
  return {
    root: {
      display: "flex",
      width: "100px",
      padding: "16px",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease-in-out",
      minHeight: "72px",
      borderRadius: 0,
      "&.initial": { background: palette.grey[100], "&:hover": { background: palette.grey[200] } },
      "&.marked": { background: palette.info.light, "&:hover": { background: palette.info.main } },
      "&.error": { background: palette.error.light, "&:hover": { background: palette.error.main } },
      "&.winner": {
        background: palette.success.light,
        "&:hover": { background: palette.success.main },
      },
    },
    icon: {},
  };
};
