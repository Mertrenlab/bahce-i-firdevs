/**
 * Rejects common credential shapes in staged changes or tracked text.
 * Not responsible for replacing a hosted secret-scanning service.
 */
import { spawnSync } from "node:child_process";

const MAX_SCAN_BYTES = 16 * 1024 * 1024;

const patterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /(?:api[_-]?key|secret|token|password)\s*[:=]\s*["'][^"']{12,}["']/i,
  /gh[pousr]_[A-Za-z0-9_]{30,}/,
];

function gitText(args, allowNoMatches = false) {
  const result = spawnSync("git", args, {
    encoding: "utf8",
    maxBuffer: MAX_SCAN_BYTES,
  });
  if (
    result.error ||
    (result.status !== 0 && !(allowNoMatches && result.status === 1))
  ) {
    throw new Error("Git inspection failed; secret scan did not complete.");
  }
  return result.stdout;
}

function scanText(tracked) {
  if (tracked) {
    return gitText(
      [
        "grep",
        "--cached",
        "--no-color",
        "--no-textconv",
        "-I",
        "-n",
        "-e",
        ".",
      ],
      true,
    );
  }
  return gitText([
    "diff",
    "--cached",
    "--no-ext-diff",
    "--no-textconv",
    "--unified=0",
  ])
    .split("\n")
    .filter((line) => line.startsWith("+") && !line.startsWith("+++"))
    .join("\n");
}

function run() {
  const args = process.argv.slice(2);
  if (args.length > 1 || (args.length === 1 && args[0] !== "--tracked")) {
    throw new Error("Usage: check-secrets.mjs [--tracked]");
  }
  const tracked = args[0] === "--tracked";
  const text = scanText(tracked);
  if (patterns.some((pattern) => pattern.test(text))) {
    throw new Error(
      `Potential credential detected in ${tracked ? "tracked text" : "staged changes"}.`,
    );
  }
  console.log(`${tracked ? "Tracked" : "Staged"} secret scan passed.`);
}

try {
  run();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
