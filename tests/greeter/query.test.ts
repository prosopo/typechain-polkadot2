import Contract from '../generated/contracts/greeter';
import Constructors from '../generated/constructors/greeter';
import {ApiPromise} from "@polkadot/api";
import type {KeyringPair} from "@polkadot/keyring/types";
import {GetAccounts} from "../config";

describe("Correctness of the Greeter contract's methods types for query", () => {
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
		const { value } = await contract.query.greet();
		expect( ['string', 'number', 'object'].includes(typeof value) ).toBe(true);
	});
});