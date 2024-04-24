import { createContext } from "react";

export type GlobalContext_t = {
    pageTitle?: string,
    updateState: (newState: Partial<GlobalContext_t>) => void
};

export const globalContextDefaultState: GlobalContext_t = {
    pageTitle: '_',
    updateState: (newState?: Partial<GlobalContext_t>) => {}
};

const GlobalContext = createContext<GlobalContext_t>({} as GlobalContext_t);
export default GlobalContext;