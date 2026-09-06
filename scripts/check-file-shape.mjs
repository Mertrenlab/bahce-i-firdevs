/**
 * Enforces the handwritten source file limit from the Genesis contract.
 * Not responsible for complexity or function-length analysis.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const MAX_LINES = 200;
const SOURCE_DIRS = ["src", "scripts"];
const CHECKED_EXTENSIONS = [".ts", ".tsx", ".css", ".mjs"];

function sourceFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? sourceFiles(path) : [path];
  });
}

function isChecked(path) {
  return CHECKED_EXTENSIONS.some((extension) => path.endsWith(extension));
}

function lineCount(path) {
  return readFileSync(path, "utf8").trimEnd().split("\n").length;
}

const violations = SOURCE_DIRS.flatMap(sourceFiles)
  .filter(isChecked)
  .map((path) => ({ path, lines: lineCount(path) }))
  .filter(({ lines }) => lines > MAX_LINES);

if (violations.length > 0) {
  console.error("Handwritten files above 200 lines:", violations);
  process.exitCode = 1;
} else {
  console.log("Source file shape check passed.");
}
