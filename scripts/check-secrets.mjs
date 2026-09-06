/**
 * Rejects common credential shapes in staged text changes.
 * Not responsible for replacing a hosted secret-scanning service.
 */
import { execFileSync } from "node:child_process";

const patterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /(?:api[_-]?key|secret|token|password)\s*[:=]\s*["'][^"']{12,}["']/i,
  /gh[pousr]_[A-Za-z0-9_]{30,}/,
];

function stagedDiff() {
  try {
    return execFileSync("git", ["diff", "--cached", "--unified=0"], {
      encoding: "utf8",
    });
  } catch (error) {
    console.error("Unable to inspect staged changes.", error);
    process.exit(1);
  }
}

const addedLines = stagedDiff()
  .split("\n")
  .filter((line) => line.startsWith("+") && !line.startsWith("+++"))
  .join("\n");

if (patterns.some((pattern) => pattern.test(addedLines))) {
  console.error("Potential credential detected in staged changes.");
  process.exitCode = 1;
} else {
  console.log("Staged secret scan passed.");
}
