/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { FuncHandler } from "../FuncHandler";

export class FuncHandler__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FuncHandler {
    return new Contract(address, _abi, signerOrProvider) as FuncHandler;
  }
}

const _abi = [
  {
    inputs: [],
    name: "AccountAlreadyDeactivated",
    type: "error",
  },
  {
    inputs: [],
    name: "AccountNotApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "AllMemberIsPaid",
    type: "error",
  },
  {
    inputs: [],
    name: "ExecutionStopped",
    type: "error",
  },
  {
    inputs: [],
    name: "IDoNotAcceptEtherIFYouForceItLost",
    type: "error",
  },
  {
    inputs: [],
    name: "InSufficientValue",
    type: "error",
  },
  {
    inputs: [],
    name: "InconsistentArrayValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "InsufficientFund",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidParameter",
    type: "error",
  },
  {
    inputs: [],
    name: "NoAccountDetected",
    type: "error",
  },
  {
    inputs: [],
    name: "SomethingWentWrong",
    type: "error",
  },
  {
    inputs: [],
    name: "StatusAlreadyUpdated",
    type: "error",
  },
  {
    inputs: [],
    name: "SystemAlreadyRunning",
    type: "error",
  },
  {
    inputs: [],
    name: "SystemNotRunning",
    type: "error",
  },
  {
    inputs: [],
    name: "TargetHasNoAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "UnAuthorizedCaller",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "UnsupportedAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedToken",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawalRestricted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "AccountLaunched",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "enum ICommon.Mode",
                name: "mode",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "quorum",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "selector",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "ccr",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
              },
            ],
            internalType: "struct ICommon.Uints",
            name: "uints",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "unit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "receivable",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currentPool",
                type: "uint256",
              },
            ],
            internalType: "struct ICommon.Uint256s",
            name: "uint256s",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "asset",
                type: "address",
              },
              {
                internalType: "address",
                name: "lastPaid",
                type: "address",
              },
            ],
            internalType: "struct ICommon.Addresses",
            name: "addrs",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "mems",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "allGh",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ICommon.Pool",
        name: "",
        type: "tuple",
      },
    ],
    name: "BandCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "GetFinanced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Joined",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "NewAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "Payback",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "Rekeyed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "enum ICommon.Mode",
                name: "mode",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "quorum",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "selector",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "ccr",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
              },
            ],
            internalType: "struct ICommon.Uints",
            name: "uints",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "unit",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "receivable",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "currentPool",
                type: "uint256",
              },
            ],
            internalType: "struct ICommon.Uint256s",
            name: "uint256s",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "asset",
                type: "address",
              },
              {
                internalType: "address",
                name: "lastPaid",
                type: "address",
              },
            ],
            internalType: "struct ICommon.Addresses",
            name: "addrs",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "mems",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "allGh",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ICommon.Pool",
        name: "",
        type: "tuple",
      },
    ],
    name: "RoundUp",
    type: "event",
  },
];
