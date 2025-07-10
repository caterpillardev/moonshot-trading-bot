import { Provider, Program } from "@coral-xyz/anchor";
import { Moonshot, IDL } from "./IDL";
import { PublicKey } from "@solana/web3.js";
import { BN } from "bn.js";

export class MoonshotSDK {
  public program: Program<Moonshot>;
  public connection: any;
  constructor(provider?: Provider) {
    this.program = new Program<Moonshot>(IDL as Moonshot, provider);
    this.connection = this.program.provider.connection;
  }
  // Add Moonshot-specific methods here, following the structure of BonkSwapSDK if needed
} 