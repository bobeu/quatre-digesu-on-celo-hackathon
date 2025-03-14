/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface GreeterInterface extends ethers.utils.Interface {
  functions: {
    "greet()": FunctionFragment;
    "setGreeting(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "greet", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGreeting", values: [string]): string;

  decodeFunctionResult(functionFragment: "greet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGreeting",
    data: BytesLike
  ): Result;

  events: {
    "newGreeting(string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "newGreeting"): EventFragment;
}

export class Greeter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GreeterInterface;

  functions: {
    greet(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "greet()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGreeting(string)"(
      _greeting: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  greet(overrides?: CallOverrides): Promise<string>;

  "greet()"(overrides?: CallOverrides): Promise<string>;

  setGreeting(
    _greeting: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGreeting(string)"(
    _greeting: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    greet(overrides?: CallOverrides): Promise<string>;

    "greet()"(overrides?: CallOverrides): Promise<string>;

    setGreeting(_greeting: string, overrides?: CallOverrides): Promise<void>;

    "setGreeting(string)"(
      _greeting: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    newGreeting(greeting: null, sender: null): EventFilter;
  };

  estimateGas: {
    greet(overrides?: CallOverrides): Promise<BigNumber>;

    "greet()"(overrides?: CallOverrides): Promise<BigNumber>;

    setGreeting(_greeting: string, overrides?: Overrides): Promise<BigNumber>;

    "setGreeting(string)"(
      _greeting: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    greet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "greet()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGreeting(string)"(
      _greeting: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
