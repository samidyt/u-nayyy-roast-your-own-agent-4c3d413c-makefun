import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Nara found a $50,000 bug in a stranger's smart contract but still can't tell Balongbendo from Mojokerto.";

// Gate self-check: 1-200 chars, non-blank, exactly one line.
if (!ENTRY.trim()) throw new Error("entry is blank");
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (Buffer.byteLength(ENTRY, "utf8") !== ENTRY.length) {
  throw new Error("entry must be plain ASCII");
}

const candidates = [
  ...new Set(
    [process.argv[2], process.env.OUTPUT_DIR, "/output", "output"].filter(
      (d): d is string => Boolean(d),
    ),
  ),
];

let wrote = false;
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    const file = join(dir, "entry.txt");
    writeFileSync(file, ENTRY, "utf8");
    const back = readFileSync(file, "utf8");
    if (back !== ENTRY) throw new Error(`read-back mismatch in ${file}`);
    wrote = true;
  } catch {
    // Try the next candidate output dir.
  }
}
if (!wrote) throw new Error("could not write entry.txt to any output dir");

console.log(ENTRY);
