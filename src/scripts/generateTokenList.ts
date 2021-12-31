import { GitHubTokenListResolutionStrategy } from "@solana/spl-token-registry";
import fs from "fs";

import { stableStringify } from "../utils/serialize";

/**
 * Fetches all swaps from the chain, summarizing important addresses.
 */
const fetchTokens = async (): Promise<void> => {
  const allTokens = await new GitHubTokenListResolutionStrategy().resolve();
  fs.writeFileSync(
    `${__dirname}/../../solana-token-list.json`,
    stableStringify(allTokens)
  );
};

const main = async () => {
  await fetchTokens();
};

main()
  .then()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
