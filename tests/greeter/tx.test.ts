import Contract from '../generated/contracts/greeter';
import {
	GetAccounts,
} from '../config';
import Constructors from "../generated/constructors/greeter";
import type {KeyringPair} from "@polkadot/keyring/types";
import {ApiPromise} from "@polkadot/api";

describe("Correctness of the Greeter contract's methods types for tx", () => {
	let api : ApiPromise;
	let contract : Contract;
	let UserAlice: KeyringPair;

	beforeAll(async () => {
		api = await ApiPromise.create();

		const accounts = GetAccounts();

		UserAlice = accounts.UserAlice;

		const factory = new Constructors(api, UserAlice);

		const res = await factory.new("Hello, world!");

		contract = new Contract(res.address, UserAlice, api);
	});

	afterAll(async () => {
		await api.disconnect();
	});

	jest.setTimeout(10000);

	test(`Greeter::greet`, async () => {
		await contract.tx.greet();
	});

	test(`Greeter::setMessage`, async () => {
		await contract.tx.setMessage("Hello, Web3!");
	});
});