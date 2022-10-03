const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --cache --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

const buildTypeCheckCommand = () => "tsc --noEmit";

module.exports = {
  "*": "prettier --write --ignore-unknown",
  "*.{js,jsx,ts,tsx}": buildEslintCommand,
  "*.{ts,tsx}": buildTypeCheckCommand,
};
