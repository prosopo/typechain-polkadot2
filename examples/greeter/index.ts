// In this example we will deploy & interact with greeter contract to set and get greeting message.
import Contract from "./out/contracts/greeter";
import {ApiPromise, Keyring} from "@polkadot/api";
import Constructors from "./out/constructors/greeter";

async function main() {
	const api = await ApiPromise.create();

	const keyring = new Keyring({type: 'sr25519'});

	const aliceKeyringPair = keyring.addFromUri('//Alice');

	const constructors = new Constructors(api, aliceKeyringPair);
	const greeting = "Hello, world!";

	const {address: TOKEN_ADDRESS} = await constructors.new(greeting);

	console.log('Contract deployed at:', TOKEN_ADDRESS);

	const contract = new Contract(TOKEN_ADDRESS, aliceKeyringPair, api);

	const {value} = await contract.query.greet();
	console.log('The greeting is: ', value);

	await contract.tx.setMessage("Hello, Web3!");

	const {value: newGreeting} = await contract.query.greet();
	console.log('The new greeting is: ', newGreeting);

	await api.disconnect();
}

main().then(() => {
	console.log('done');
});