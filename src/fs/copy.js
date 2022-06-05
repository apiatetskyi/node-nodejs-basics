import { readdir, copyFile, mkdir } from "fs/promises";
import { getDirname } from "../utils/path.js";

const __dirname = getDirname(import.meta.url);

export const copy = async () => {
  try {
    await mkdir(`${__dirname}/files_copy`);
    const entries = await readdir(`${__dirname}/files`, {
      withFileTypes: true,
    });

    for (let entry of entries) {
      if (entry.isFile()) {
        copyFile(
          `${__dirname}/files/${entry.name}`,
          `${__dirname}/files_copy/${entry.name}`
        );
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("FS operation failed");
  }
};

copy();
