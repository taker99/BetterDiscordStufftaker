import { context } from "esbuild";
import { glob } from "fs/promises";
import bdPlugin from "./bd-plugin.ts";

const ctx = await context({
	entryPoints: await Array.fromAsync(glob("src/**/index.*")),
	outdir: "Plugins",
	entryNames: "[dir]/[dir].plugin",
	outbase: "src",
	plugins: [bdPlugin],
});

await ctx.watch();
