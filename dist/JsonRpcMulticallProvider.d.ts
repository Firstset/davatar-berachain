/// <reference types="node" />
import type { Signer } from '@ethersproject/abstract-signer';
import { BaseProvider, Network } from '@ethersproject/providers';
type BatchCallItem = {
    request: {
        target: string;
        callData: any;
    };
    resolve: (_result: any) => void;
    reject: (_error: Error) => void;
};
export declare class JsonRpcMulticallProvider extends BaseProvider {
    readonly parent: BaseProvider;
    _pendingBatchAggregator?: NodeJS.Timer | null;
    _pendingBatch?: Array<BatchCallItem> | null;
    constructor(provider: BaseProvider);
    getSigner(addressOrIndex?: string | number): Signer;
    perform(method: string, params: any): Promise<any>;
    detectNetwork(): Promise<Network>;
}
export {};
