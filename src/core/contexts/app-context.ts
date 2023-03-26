import { AppState } from "@core/interfaces";
import { Actions } from "@core/reducers";
import { createContext } from "react";

type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<Actions>;
};

export const AppContext = createContext<AppContextType>(Object({}));
