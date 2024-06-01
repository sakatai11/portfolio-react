module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"prettier", // Prettierとの競合を避けるために追加
	],
	ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.js"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		//今はtypescriptの判定は必要ない
		// "@typescript-eslint/naming-convention": [
		//   "error",
		//   {
		//     selector: "variable",
		//     format: ["camelCase"],
		//   },
		//   {
		//     selector: "function",
		//     format: ["camelCase", "PascalCase"],
		//   },
		//   {
		//     selector: "parameter",
		//     format: ["camelCase"],
		//   },
		//   {
		//     selector: "class",
		//     format: ["PascalCase"],
		//   },
		//   {
		//     selector: "method",
		//     format: ["camelCase"],
		//   },
		//   {
		//     selector: "property",
		//     format: ["camelCase"],
		//   },
		//   {
		//     selector: "interface",
		//     format: ["PascalCase"],
		//   },
		//   {
		//     selector: "typeAlias",
		//     format: ["PascalCase"],
		//   },
		//   {
		//     selector: "typeParameter",
		//     format: ["camelCase"],
		//   },
		//   {
		//     selector: "enum",
		//     format: ["PascalCase"],
		//   },
		//   {
		//     selector: "enumMember",
		//     format: ["UPPER_CASE"],
		//   },
		// ],
	},
};
