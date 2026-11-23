// News-image entry for make.fun's "Sum up 23 November's world news in one image" bounty.
// The entry is a single image of the day's news, held in this repository as entry.png.
// This program writes that image to the output directory the grader provides
// (MAKEFUN_OUTPUT_DIR), defaulting to /output, as entry.png.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
