import type { ReactNode } from "react"
// components
import { MAP } from "./paths"
// paths
import Map from '../pages/Map'

interface IRoute {
    path: string
    element: ReactNode
}

export const publicRoutes: IRoute[] = [
    {
        path: MAP,
        element: <Map/>
    }
]