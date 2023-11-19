import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    entryPoints: ["src/index.ts"],
    clean: true,
    env: {
        'process.env.NODE_ENV': JSON.stringify('production')
    },
    format: ["esm","cjs"],
    sourcemap: true,
    treeshake: true,
    ...options,
}));