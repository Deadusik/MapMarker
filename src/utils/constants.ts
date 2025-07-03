import type { Coordinates } from "./types";

export const SCREEN_SIZES = {
  xs: 0,
  sm: 600,
  md: 768,
  lg: 1200,
  xl: 1536,
};

export const DEFAULT_CENTER: Coordinates = { lat: 50.4501, lng: 30.5234 }

export const LOCAL_STORAGE_KEYS = {
  language: "language",
  theme: "theme"
}