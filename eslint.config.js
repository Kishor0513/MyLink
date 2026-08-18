import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
    {
        ignores: ["assets/**", "dist/**"]
    },
    js.configs.recommended,
    {
        files: ["**/*.jsx", "**/*.js", "**/*.mjs"],
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
			"react/jsx-uses-vars": "error",
			"no-unused-vars": "warn",
			"no-undef": "warn"
		}
    }
];
