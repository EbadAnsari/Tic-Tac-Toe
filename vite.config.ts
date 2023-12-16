import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": resolve(__dirname, "./src/components"),
			"@interfaces": resolve(__dirname, "./src/interfaces"),
			"@store": resolve(__dirname, "./src/store"),
			"@util": resolve(__dirname, "./src/util"),
		},
	},
});
