// Roast Your Own Operator in One Line — make.fun entry (program/v1).
// COPY-ONLY entrypoint: reads entry.txt from this directory and writes it
// byte-identical to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
// No rendering, no writes to the repo, no DOM/browser access.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  const data = readFileSync(join(here, "entry.txt"));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), data);
} catch (err) {
  console.error("failed to copy entry.txt:", err);
  process.exit(1);
}
