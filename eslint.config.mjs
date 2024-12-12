import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    languageOptions: {
      parser: typescriptParser, // Use the imported TypeScript parser object directly
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    files: ["src/**/*.{js,ts}"],
    plugins: {
      "@typescript-eslint": typescriptPlugin, // Reference the imported plugin
    },
    rules: {
      // Add your custom rules here
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn", // Example TypeScript-specific rule
    },
  },
];
