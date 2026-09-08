import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, test } from "node:test";

const scanner = fileURLToPath(new URL("./check-secrets.mjs", import.meta.url));
const directories = [];

function repository(content) {
  const directory = mkdtempSync(join(tmpdir(), "firdevs-secret-check-"));
  directories.push(directory);
  execFileSync("git", ["init", "--quiet", directory]);
  writeFileSync(join(directory, "sample.txt"), content);
  execFileSync("git", ["add", "sample.txt"], { cwd: directory });
  return directory;
}

function scan(directory, args = []) {
  return spawnSync(process.execPath, [scanner, ...args], {
    cwd: directory,
    encoding: "utf8",
  });
}

afterEach(() => {
  directories.splice(0).forEach((directory) => {
    rmSync(directory, { recursive: true, force: true });
  });
});

test("clean staged text passes", () => {
  assert.equal(scan(repository("A flower catalogue")).status, 0);
});

test("a staged credential fails without revealing it", () => {
  const credential = `ghp_${"x".repeat(32)}`;
  const result = scan(repository(credential));
  assert.equal(result.status, 1);
  assert.equal(result.stderr.includes(credential), false);
});

test("tracked mode detects a committed credential with no staged diff", () => {
  const directory = repository(`ghp_${"x".repeat(32)}`);
  execFileSync(
    "git",
    [
      "-c",
      "user.name=Test",
      "-c",
      "user.email=test@example.invalid",
      "commit",
      "--quiet",
      "-m",
      "fixture",
    ],
    { cwd: directory },
  );
  assert.equal(scan(directory).status, 0);
  assert.equal(scan(directory, ["--tracked"]).status, 1);
});

test("tracked mode skips binary content", () => {
  const directory = repository(Buffer.from(`\0ghp_${"x".repeat(32)}`));
  assert.equal(scan(directory, ["--tracked"]).status, 0);
});

test("unknown scan modes fail explicitly", () => {
  assert.equal(scan(repository("Flowers"), ["--unknown"]).status, 1);
});
