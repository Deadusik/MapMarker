import type { ReactNode } from "react"
// components
import { ABOUT, MAP, SETTINGS } from "./paths"
// paths
import { Map, About, Settings } from "@/pages"
interface IRoute {
    path: string
    element: ReactNode
}

export const publicRoutes: IRoute[] = [
    {
        path: MAP,
        element: <Map />
    },
    {
        path: ABOUT,
        element: <About />
    },
    {
        path: SETTINGS,
        element: <Settings />
    },
]