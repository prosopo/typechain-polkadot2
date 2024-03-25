# Typechain-Polkadot
This library generates TypeScript types from an `ink!`-based smart contract.

# NOTE
This library is a modified version of 727-venture's typechain-polkadot library. Our team at prosopo is currently in the process of revamping the library to incorporate bug fixes, updates from polkadot libraries, and various improvements.

### Installation & import

Install the package as dependency:

```bash
npm i @prosopo/typechain-polkadot
```

Pass the folder with artifacts(in the example it is `artifacts`) as input argument
and the output folder(in the example it is `typed_contracts`):
```bash
npx @prosopo/typechain-polkadot --in artifacts --out typed_contracts
```

Import the contract what you want to use(in the example it is [`my_psp22`](https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp22)):
```typescript
import MyPSP22 from "../typed_contracts/contracts/my_psp22"
```

In the code you can find all available methods and constructors.

Right now, you can't instantiate the contract via typechain(coming soon),
but you can wrap any already deployed contract. If in the code you already
have instantiated `contract` then you can easily wrap it:

```typescript
const typed_contract = new MyPSP22(
    contract.address.toString(),
    signer /* who will sign transactions*/,
    contract.api
);
```

More information you can find in [docs](docs/about.md).

### Usage of Typechain-compiler

```bash
npx typechain-compiler --config config.json
```

Also you can set some additional arguments like `--noCompile`, `--noTypechain`, `--release`

Config interface will be something like this:
```typescript
export interface Config {
    projectFiles: string[]; // Path to all project files, everystring in glob format
    skipLinting : boolean; // Skip linting of project files
    artifactsPath : string; // Path to artifacts folder, where artifacts will be stored it will save both .contract and .json (contract ABI)
    typechainGeneratedPath : string; // Path to typechain generated folder
}
```

### Project Details

Typesafe contracts' descriptions can be generated automatically by a script, taking a list of ABIs as an input, giving usable TS type definitions and even runtime code as its output.

Given, that a front-end developer needs to do this with every contracts update, such tool would save a lot of time and prevent mistakes of misusing smart contracts. It is installed as a package with built-in CLI.

When contracts descriptions come both with ABI and source code (`*.contract` files), our tool will provide means for deployment as well.

Also, Typechain-Polkadot uses awesome tool Handlebars for generating code from templates. It is a very flexible and powerful tool, which allows to generate code from templates with a lot of different logic.
For example, you can generate code for different contracts with different logic, or you can generate code for different methods with different logic.

## Documentation 📚

- [About and mini-guide (recommended)](docs/about.md)
- [Typechain-Polkadot](packages/typechain-polkadot/README.md)
- [Typechain-compiler](packages/typechain-compiler/README.md)
- [Testing](tests/README.md)
- [Examples](examples/README.md)
- [Article 1](https://medium.com/p/7c184067523f)
- [Article 2](https://medium.com/brushfam/ways-how-to-use-typechain-polkadot-in-your-project-281ef80b8dd8)
