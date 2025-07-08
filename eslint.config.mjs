// eslint.config.mjs
import next from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import js from "@eslint/js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

export default tseslint.config(
  {
    ignores: [".next/", "node_modules/", "!.storybook"], // Added storybook exception
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    ...js.configs.recommended,
  },
  {
    files: ["**/*.tsx"],
    ...reactRecommended,
    ...next.configs.recommended,
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "warn",
      "react-hooks/exhaustive-deps": "error",
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": "warn",
    },
  },
  {
    files: ["**/*.stories.tsx"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  }
);
