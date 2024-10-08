import React, { ReactChild, CSSProperties } from 'react';
export type AvatarProps = {
    /**
     * The size of the avatar in pixels.
     */
    size: number;
    /**
     * An Ethereum address
     */
    address: string;
    /**
     * An ethers or web3.js provider
     */
    provider?: any;
    /**
     * An API key for The Graph
     *
     * @deprecated
     */
    graphApiKey?: string;
    /**
     * The kind of generated avatar to display if no avatar
     */
    generatedAvatarType?: 'jazzicon' | 'blockies';
    /**
     * A default component to render if there is no avatar
     */
    defaultComponent?: ReactChild | ReactChild[];
    /**
     * Custom CSS styles to apply to the avatar <img /> tag
     */
    style?: CSSProperties;
    /**
     * How long to cache resolved images for, in milliseconds
     *
     * @default 24 hours
     */
    cacheTTL?: number;
};
export default function Avatar({ size, address, provider, generatedAvatarType, defaultComponent, style, cacheTTL, }: AvatarProps): React.JSX.Element;
