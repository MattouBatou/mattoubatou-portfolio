import { createContext } from "react";

export type AppContext_t = {
    pageTitle?: string,
    projectThumbnail?: string | null,
    updateState: (newState: Partial<AppContext_t>) => void
};

export const globalContextDefaultState: AppContext_t = {
    pageTitle: '_',
    projectThumbnail: null,
    updateState: (newState?: Partial<AppContext_t>) => {}
};

const AppContext = createContext<AppContext_t>({} as AppContext_t);
export default AppContext;