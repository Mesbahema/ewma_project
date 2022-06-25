import { config } from 'config';

export function getFullImageUrl(url?: string) {
    if (url?.includes?.(config.baseImageUrl)) return url;

    return url && `${config.baseImageUrl}${url}`;
}
