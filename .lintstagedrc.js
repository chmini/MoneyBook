import path from "path";

const config = {
  "**/*.{js,cjs,mjs,ts,tsx,md}": "npx prettier --write",
  "apps/web/**/*.{ts,tsx}": [
    (filenames) =>
      `yarn workspace @moneybook/web lint --cache --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(" --file ")}`,
    () => "yarn workspace @moneybook/web type",
  ],
};

export default config;
