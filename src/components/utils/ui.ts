export function getFullImageUrl(url?: string) {
    const baseImageUrl = process.env.BASE_IMAGE_URL as string
    if (url?.includes?.(baseImageUrl)) return url;

    return url && `${baseImageUrl}${url}`;
}
