/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Arithmetics, ArithmeticsInterface } from "../Arithmetics";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "mul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060b98061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063c8a4ac9c14602d575b600080fd5b606060048036036040811015604157600080fd5b8101908080359060200190929190803590602001909291905050506076565b6040518082815260200191505060405180910390f35b600081830290509291505056fea26469706673582212200a092e66df634bd7b88514ef35d4a48cfc050ec4c55e3fa5eca792822ef27a7964736f6c63430007030033";

export class Arithmetics__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Arithmetics> {
    return super.deploy(overrides || {}) as Promise<Arithmetics>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Arithmetics {
    return super.attach(address) as Arithmetics;
  }
  connect(signer: Signer): Arithmetics__factory {
    return super.connect(signer) as Arithmetics__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArithmeticsInterface {
    return new utils.Interface(_abi) as ArithmeticsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Arithmetics {
    return new Contract(address, _abi, signerOrProvider) as Arithmetics;
  }
}
