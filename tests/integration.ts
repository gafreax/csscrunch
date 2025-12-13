import fs from "node:fs";
import path from "node:path";

const cssList = fs
	.readdirSync(path.join(__dirname, "__css__"))
	.filter((file) => file.endsWith(".css"));
export function getIntegrationFiles(): string[] {
	return cssList;
}
