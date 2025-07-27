import { createContext } from "react";

export const ProviderMethodContext = createContext({
  myFunction: () => console.log("Default function called"),
});
