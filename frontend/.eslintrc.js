module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@typescript-eslint", "import", "unused-imports"],
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-use-before-define": "warn",
    "prefer-const": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc" },
        groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
        pathGroupsExcludedImportTypes: ["builtin", "object"],
        pathGroups: [
          // Main
          // { pattern: "{next,next/**,@next/**,@apollo/**}", group: "external", position: "before" },

          // Designs
          { pattern: "{@mantine/**,@emotion/**,@tabler/**}", group: "parent", position: "before" },
        ],
      },
    ],
    "import/newline-after-import": "warn", // インポートの末尾に空行
    "unused-imports/no-unused-imports": "warn", // 未使用のインポート
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
}
