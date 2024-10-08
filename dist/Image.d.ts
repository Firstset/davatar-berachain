import { BaseProvider } from '@ethersproject/providers';
import React, { CSSProperties, ReactChild } from 'react';
export type ImageProps = {
    /**
     * The size of the avatar in pixels.
     */
    size: number;
    /**
     * The URI of the image to be resolved
     */
    uri?: string | null;
    /**
     * An Ethereum address
     */
    address?: string | null;
    /**
     * Custom CSS styles to apply to the <img /> tag
     */
    style?: CSSProperties;
    className?: string;
    /**
     * An API key for The Graph
     *
     * @deprecated
     */
    graphApiKey?: string;
    /**
     * An ethers provider
     */
    provider?: BaseProvider | null;
    /**
     * The kind of generated avatar to display if image isn't loaded
     */
    generatedAvatarType?: 'jazzicon' | 'blockies';
    /**
     * A default component to render if image isn't loaded
     */
    defaultComponent?: ReactChild | ReactChild[];
    /**
     * How long to cache resolved images for, in milliseconds
     *
     * @default 24 hours
     */
    cacheTTL?: number;
};
export default function Image({ uri, style, className, size, address, provider, generatedAvatarType, defaultComponent, cacheTTL, }: ImageProps): React.JSX.Element;
