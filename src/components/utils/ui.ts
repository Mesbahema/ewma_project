export function getFullImageUrl(url?: string) {
    const baseImageUrl = process.env.BASE_IMAGE_URL as string
    if (url?.includes?.(baseImageUrl)) return url;

    return url && `${baseImageUrl}${url}`;
}

const imdbBaseUrl = 'https://www.imdb.com/title'
export function getImdbLink(url?: string) {
    try {
        return `${imdbBaseUrl}/${url}`
    } catch {
        return imdbBaseUrl
    }
}
