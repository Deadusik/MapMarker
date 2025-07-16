export const NOMINATIM_BASE_URL = import.meta.env.VITE_NOMINATIM_BASE_URL

console.log(NOMINATIM_BASE_URL)

export const getSearchPointsUrl = (query: string) =>
    `${NOMINATIM_BASE_URL}?q=${encodeURIComponent(query)}&format=json`
