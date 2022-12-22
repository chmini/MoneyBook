const config = {
  "**/*.{js,cjs,mjs,ts,tsx,md}": "npx prettier --write",
  "packages/**/*.{ts,tsx}": () => "yarn lint",
  "packages/core/**/*.{ts,tsx}": () => "yarn workspace @papad/core tsc",
  "packages/styles/**/*.{ts,tsx}": () => "yarn workspace @papad/styles tsc",
};

export default config;
