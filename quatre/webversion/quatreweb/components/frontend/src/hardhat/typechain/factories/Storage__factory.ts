/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Storage } from "../Storage";

export class Storage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Storage> {
    return super.deploy(overrides || {}) as Promise<Storage>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Storage {
    return super.attach(address) as Storage;
  }
  connect(signer: Signer): Storage__factory {
    return super.connect(signer) as Storage__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Storage {
    return new Contract(address, _abi, signerOrProvider) as Storage;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "newNumber",
    type: "event",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600160005534801561001557600080fd5b5060eb806100246000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80632e64cec11460375780636057361d14604c575b600080fd5b60005460405190815260200160405180910390f35b605b6057366004609d565b605d565b005b6000819055604080518281523360208201527fec82311f97b04658298386090ef20f797cdda0d5c70aecd631063241c68facf8910160405180910390a150565b60006020828403121560ae57600080fd5b503591905056fea264697066735822122003bc0bdde48482d7457a99706e4f5b8e722773e91876640ce3b23f88984f9cc264736f6c63430008090033";
