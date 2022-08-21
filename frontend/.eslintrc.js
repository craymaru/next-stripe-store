module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@typescript-eslint", "import", "unused-imports"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/warnings",
    "prettier",
  ],
  rules: {
    "prefer-const": "warn",
    "no-use-before-define": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
        alphabetize: { order: "asc" },
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin", "object"],
        pathGroups: [
          // Main
          // { pattern: "{next,next/**,@next/**,@apollo/**}", group: "external", position: "before" },

          // Designs
          { pattern: "{@mantine/**,@emotion/**,@tabler/**}", group: "parent", position: "before" },
        ],
      },
    ],
    // インポート構文の最後は必ず空行がある
    "import/newline-after-import": "warn",
    // 未使用インポートの警告
    "unused-imports/no-unused-imports": "warn",
  },
}
