import Contract from '../generated/contracts/greeter';
import Constructors from '../generated/constructors/greeter';
import {ApiPromise} from "@polkadot/api";
import type {KeyringPair} from "@polkadot/keyring/types";
import {GetAccounts} from "../config";


describe("Correctness of the Greeter contract's methods types", () => {
	let api: ApiPromise;
	let contract: Contract;
	let UserAlice: KeyringPair;
	
	const greeting = "Hello, world!";

	const newGreeting = "Hello, Web3!";

	beforeEach(async () => {
		api = await ApiPromise.create();

		const accounts = GetAccounts();

		UserAlice = accounts.UserAlice;

		const factory = new Constructors(api, UserAlice);

		const {address} = await factory.new(greeting);

		contract = new Contract(address, UserAlice, api);
	});

	afterEach(async () => {
		await api.disconnect();
	});

	jest.setTimeout(10000);

	test("greeting works", async () => {
		expect((await contract.query.greet()).value.unwrapRecursively().toString()).toBe(greeting);
	});

	test("setting new greeting works", async () => {
		await contract.tx.setMessage(newGreeting);
		expect((await contract.query.greet()).value.unwrapRecursively().toString()).toBe(newGreeting);
	});
});