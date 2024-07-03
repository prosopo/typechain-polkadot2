// Copyright (c) 2012-2022 Supercolony
//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the"Software"),
// to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import {Abi} from "@polkadot/api-contract";
import {TypeParser} from "@prosopo/typechain-polkadot-parser";
import Handlebars from "handlebars";
import {TypeInfo} from "@prosopo/typechain-polkadot-parser/src/types/TypeInfo";
import {Import} from "../types";
import {readTemplate} from "../utils/handlebars-helpers";
import {writeFileSync} from "../utils/directories";
import {TypechainPlugin} from "../types/interfaces";

const generateForMetaTemplate = Handlebars.compile(readTemplate("types-arguments"));

export default class TypesArgumentsPlugin implements TypechainPlugin {
	generate(abi: Abi, fileName: string, absPathToABIs: string, absPathToOutput: string): void {
		
		const parser = new TypeParser(abi);
		writeFileSync(
			absPathToOutput,
			`types-arguments/${fileName}.ts`,
			generateForMetaTemplate({...this.options, tsTypes: parser.tsTypes, additionalImports: []})
		);
	}

	name: string = "TypesArgumentsPlugin";
	outputDir: string = "types-arguments";
	options = {};
}
