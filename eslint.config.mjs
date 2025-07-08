// eslint.config.js
import next from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default tseslint.config(
  {
    ignores: [".next/", "node_modules/"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    ...js.configs.recommended,
  },
  {
    files: ["**/*.tsx"],
    extends: [next.configs.recommended],
    rules: {
      "@next/next/no-html-link-for-pages": "off", // If using app router
      "@next/next/no-img-element": "warn",
      "react-hooks/exhaustive-deps": "error",
    },
  }
);
