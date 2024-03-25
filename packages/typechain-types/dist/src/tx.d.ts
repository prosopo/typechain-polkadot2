import type { ContractPromise } from "@polkadot/api-contract";
import type { RequestArgumentType, GasLimitAndValue } from './types';
import type { SubmittableExtrinsic } from '@polkadot/api/submittable/types';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { Registry } from '@polkadot/types-codec/types';
import type { ApiPromise, SubmittableResult } from "@polkadot/api";
import type { EventRecord } from '@polkadot/types/interfaces';
type SignAndSendSuccessResponse = {
    from: string;
    txHash?: string;
    blockHash?: string;
    result?: SubmittableResult;
    error?: {
        message?: any;
        data?: any;
    };
    events?: {
        [index: string]: any;
    };
};
export type { SignAndSendSuccessResponse };
export declare function txSignAndSend(nativeAPI: ApiPromise, nativeContract: ContractPromise, signer: KeyringPair | string, title: string, eventHandler: (event: EventRecord[]) => {
    [index: string]: any;
}, args?: readonly RequestArgumentType[], gasLimitAndValue?: GasLimitAndValue): Promise<SignAndSendSuccessResponse>;
export declare function buildSubmittableExtrinsic(api: ApiPromise, nativeContract: ContractPromise, title: string, args?: readonly RequestArgumentType[], gasLimitAndValue?: GasLimitAndValue): SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
/**
 * (i) For reference, see:
 * 	- https://polkadot.js.org/docs/api/cookbook/tx#how-do-i-get-the-decoded-enum-for-an-extrinsicfailed-event
 * 	- `@redspot/patract/buildTx`
 */
export declare function _signAndSend(registry: Registry, extrinsic: SubmittableExtrinsic<'promise'>, signer: KeyringPair | string, eventHandler: (event: EventRecord[]) => {
    [index: string]: any;
}): Promise<SignAndSendSuccessResponse>;
//# sourceMappingURL=tx.d.ts.map