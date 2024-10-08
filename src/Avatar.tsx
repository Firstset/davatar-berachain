import { Web3Provider, BaseProvider } from '@ethersproject/providers';
import React, { useEffect, useState, ReactChild, CSSProperties } from 'react';

import { useAvatarEthersProvider } from './AvatarProvider';
import Image from './Image';
import { getCachedUrl } from './cache';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export default function Avatar({
  size,
  address,
  provider,
  generatedAvatarType,
  defaultComponent,
  style,
  cacheTTL,
}: AvatarProps) {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const [ethersProvider, setEthersProvider] = useState<BaseProvider | null>(null);
  const avatarEthersProvider = useAvatarEthersProvider();

  useEffect(() => {
    let eth = avatarEthersProvider;
    let chainId = null;
    let isEthers = false;

    // carlos: Only use the provided provider if ENS is actually on that chain
    if (provider) {
      if (provider.currentProvider?.chainId) {
        chainId = parseInt(provider.currentProvider.chainId);
      } else if (provider.network?.chainId) {
        isEthers = true;
        chainId = provider.network.chainId;
      }

      if ([1, 3, 4, 5].includes(chainId)) {
        eth = isEthers ? (provider as BaseProvider) : new Web3Provider(provider.currentProvider);
      } else {
        chainId = 1;
      }
    }

    setEthersProvider(eth);

    // if (!getCachedUrl(address)) {
    //   eth.lookupAddress(address).then(ensName => {
    //     if (ensName) {
    //       eth.getResolver(ensName).then(resolver => {
    //         if (resolver) {
    //           resolver.getText('avatar').then(avatar => {
    //             if (avatar && avatar.length > 0) {
    //               setAvatarUri(avatar);
    //             }
    //           });
    //         }
    //       });
    //     }
    //   });
    // }
  }, [address, provider, avatarEthersProvider]);

  return (
    <Image
      size={size}
      address={address}
      uri={avatarUri}
      provider={ethersProvider}
      generatedAvatarType={generatedAvatarType}
      defaultComponent={defaultComponent}
      style={style}
      cacheTTL={cacheTTL}
    />
  );
}
