import type { ReactNode } from "react"
// components
import { ABOUT, MAP, SETTINGS } from "./paths"
// paths
import Map from '../pages/Map'
import About from '../pages/About'
import Settings from '../pages/Settings'

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