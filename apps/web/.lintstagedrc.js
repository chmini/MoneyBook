import path from "path";

const config = {
  "**/*.{js,cjs,mjs,ts,tsx,md}": "npx prettier --write",
  "**/*.{ts,tsx}": [
    (filenames) =>
      `yarn lint --cache --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`,
    () => "yarn tsc",
  ],
};

export default config;
