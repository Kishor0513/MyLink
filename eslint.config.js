import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["**/*.jsx", "**/*.js"],
        plugins: {
            react
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            "react/prop-types": "off",
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];
