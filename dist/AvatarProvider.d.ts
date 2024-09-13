import { BaseProvider } from '@ethersproject/providers';
import React from 'react';
export type AvatarContextType = {
    /**
     * An ethers provider
     */
    provider: BaseProvider;
};
export type AvatarProviderProps = {
    /**
     * An ethers provider
     */
    provider?: BaseProvider;
    /**
     * If true, ethers lookups will be batched in multicalls
     * for more efficient RPC calls
     */
    batchLookups?: boolean;
} & React.PropsWithChildren<unknown>;
export declare function AvatarProvider({ provider, batchLookups, children }: AvatarProviderProps): React.JSX.Element;
export declare function useAvatarEthersProvider(provider?: BaseProvider | null): BaseProvider;
