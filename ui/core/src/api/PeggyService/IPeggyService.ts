import { AssetAmount } from "../../entities";
import { TxEvent } from "./types";

export type IPeggyService = {
  /**
   * Set a handler for a transaction event
   * @param handler function to handle the transaction event
   */
  onTxEvent(handler: (e: TxEvent) => void): void;
  /**
   * Release funds from the Ethereum Smart Contract and burn the equivalent tokens in sifnode
   * @param ethereumRecipient Ethereum address to send funds to
   * @param assetAmount amount of funds and sif asset eg ceth
   */
  burn(ethereumRecipient: string, assetAmount: AssetAmount): Promise<string>;

  /**
   * Lock funds in the Ethereum Smart Contract and mint the equivalent tokens in sifnode
   * @param cosmosRecipient sif address to send funds to
   * @param assetAmount amount of funds and eth asset eg erowan
   */
  lock(cosmosRecipient: string, assetAmount: AssetAmount): Promise<string>;
};
