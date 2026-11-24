import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An office joke: "let's circle back," taken as a literal, recurring itinerary.
const joke =
  "My manager said we'd circle back to it, and we have, every Monday for two years, to exactly the same spot.";

const limit = 199;
if ([...joke].length > limit) throw new Error(`joke is ${[...joke].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), joke);
