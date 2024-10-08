export type DavatarCache = {
    [key: string]: {
        url: string;
        expiresAt: string;
    };
};
export declare const storeCachedURI: (address: string, resolvedUrl: string, ttl?: number) => void;
/**
 * Get cached resolved url from local storage
 *
 * @param key - an ethereum address or an avatar URI
 */
export declare const getCachedUrl: (key: string) => string | null;
