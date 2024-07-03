import {Abi} from "@polkadot/api-contract";

export interface TypechainPlugin {
	name: string;
	outputDir: string;
    options: object
	overrides ?: boolean
	generate: (
		abi: Abi,
		fileName: string,
		absPathToABIs: string,
		absPathToOutput: string
	) => void;
	beforeRun ?: (
		absPathToABIs: string,
		absPathToOutput: string
	) => void;
}
