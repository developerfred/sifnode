import { AssetAmount } from "../../entities";
import { IPeggyService } from "./IPeggyService";

export default function createPeggyService(): IPeggyService {
  return {
    onTxEvent(handler) {},
    async burn(ethereumRecipient: string, assetAmount: AssetAmount) {
      return "";
    },
    async lock(cosmosRecipient: string, assetAmount: AssetAmount) {
      return "";
    },
  };
}
