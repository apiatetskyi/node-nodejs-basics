import { dirname } from "path";
import { fileURLToPath } from "url";

export const getDirname = (fileUrl) => dirname(fileURLToPath(fileUrl));
