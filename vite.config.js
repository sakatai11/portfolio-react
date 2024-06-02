import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { terser } from "rollup-plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// 本番環境でのみterserを適用する
		process.env.NODE_ENV === "production" &&
			terser({
				compress: {
					pure_funcs: ["console.debug", "console.log"], // 本番環境からconsole.debugとconsole.logを削除
				},
			}),
	],
	server: {
		historyApiFallback: {
			rewrites: [{ from: /^\/*/, to: "/index.html" }],
		},
	},
	// 本番環境では環境変数を含まないようにする
	define: {
		"import.meta.env":
			process.env.NODE_ENV === "production" ? {} : import.meta.env,
	},
	// esbuildの設定は削除
});
